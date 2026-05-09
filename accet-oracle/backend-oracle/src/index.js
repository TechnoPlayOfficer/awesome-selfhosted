const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { PrismaClient } = require('@prisma/client');
const lighthouse = require('@lighthouse-web3/sdk');
const ethers = require('ethers');
require('dotenv').config();
const heartbeat = require('./services/heartbeat');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;

// Start Background Services
heartbeat.start();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${uuidv4()}-${file.originalname}`)
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files are allowed'));
  }
});

// Seed Tenant for Pilot if none exists
async function ensureTenant() {
  let tenant = await prisma.tenant.findFirst();
  if (!tenant) {
    tenant = await prisma.tenant.create({
      data: { name: 'POK.tech Institute', type: 'UNIVERSITY' }
    });
    console.log('Created default tenant:', tenant.id);
  }
  return tenant;
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '1.1.0' });
});

app.post('/api/v1/documents/upload', upload.single('file'), async (req, res) => {
  let filePath = '';
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    filePath = req.file.path;
    const tenant = await ensureTenant();
    
    // Phase 3: Real Lighthouse Integration
    let cid = '';
    const apiKey = process.env.LIGHTHOUSE_API_KEY;

    if (!apiKey || apiKey === 'mock_key') {
      console.warn('Using mock CID because LIGHTHOUSE_API_KEY is not set');
      cid = `bafkrei${uuidv4().replace(/-/g, '')}`;
    } else {
      console.log('Uploading to Lighthouse...');
      const uploadResponse = await lighthouse.upload(filePath, apiKey);
      cid = uploadResponse.data.Hash;
      console.log('Lighthouse Upload Success. CID:', cid);
    }

    // Phase 1: DB Persistence (Supabase)
    const document = await prisma.document.create({
      data: {
        title: req.file.originalname,
        size: req.file.size,
        cid: cid,
        status: 'UPLOADED',
        tenantId: tenant.id
      }
    });

    // Cleanup local file
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.json({
      success: true,
      documentId: document.id,
      cid: cid,
      filename: req.file.originalname,
      status: document.status,
      tenantId: tenant.id,
      timestamp: document.createdAt
    });

  } catch (error) {
    console.error('Upload error:', error);
    // Cleanup on error
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    res.status(500).json({ error: 'Internal server error during upload', details: error.message });
  }
});

app.get('/api/v1/documents/:cid/status', async (req, res) => {
  try {
    const document = await prisma.document.findFirst({
      where: { cid: req.params.cid },
      include: { tenant: true, signatures: true, transactions: true }
    });

    if (!document) return res.status(404).json({ error: 'Document not found' });

    res.json({
      cid: document.cid,
      status: document.status,
      title: document.title,
      tenant: document.tenant.name,
      checkedAt: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching status' });
  }
});

app.get('/api/v1/documents/batch/status', async (req, res) => {
  try {
    const documents = await prisma.document.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20
    });

    const formattedDocs = documents.map(doc => ({
      cid: doc.cid,
      status: doc.status,
      title: doc.title,
      date: doc.createdAt.toISOString().split('T')[0],
      size: doc.size ? `${(doc.size / 1024 / 1024).toFixed(2)} MB` : '--'
    }));

    res.json({
      batchId: uuidv4(),
      total: formattedDocs.length,
      documents: formattedDocs
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

app.get('/api/v1/verify/:cid', async (req, res) => {
  try {
    const document = await prisma.document.findFirst({
      where: { cid: req.params.cid },
      include: { tenant: true }
    });

    if (!document) return res.status(404).json({ error: 'Document not found' });

    res.json({
      cid: document.cid,
      valid: document.status !== 'UPLOADED',
      stateSealed: ['SEALED', 'TOKEN_MINTED'].includes(document.status),
      mletrCompliant: true,
      verifiedAt: new Date().toISOString(),
      network: 'Base Mainnet',
      tokenStandard: 'ERC-3643',
      holder: 'Asset Holder',
      issuer: document.tenant.name,
      issueDate: document.createdAt.toISOString().split('T')[0],
      txHash: document.txHash || 'Pending Verification'
    });
  } catch (error) {
    res.status(500).json({ error: 'Error verifying document' });
  }
});

// Phase 4 & 5: New Endpoints from audit-v0.2 PRD
app.post('/api/v1/documents/:id/request-signature', async (req, res) => {
  try {
    const { id } = req.params;
    const document = await prisma.document.findUnique({ where: { id } });
    if (!document) return res.status(404).json({ error: 'Document not found' });

    // Mocking Docuseal trigger
    console.log(`Triggering Docuseal for document: ${id}`);
    
    await prisma.document.update({
      where: { id },
      data: { status: 'CERTICAMARA_PENDING' }
    });

    res.json({ success: true, jobId: uuidv4(), status: 'CERTICAMARA_PENDING' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to request signature' });
  }
});

const ledgerService = require('./services/ledgerService');
const odooService = require('./services/odooService');

app.post('/api/v1/onchain/mint', async (req, res) => {
  try {
    const { documentId, walletAddress } = req.body;
    
    const doc = await prisma.document.findUnique({
      where: { id: documentId },
      include: { tenant: true }
    });

    if (!doc || doc.status !== 'SEALED') {
      return res.status(400).json({ error: 'Document must be SEALED before minting' });
    }

    // 1. Blockchain Minting (Mock for now, would use ethers.js)
    const txHash = `0x${Math.random().toString(16).substr(2, 64)}`;
    
    // 2. Financial Ledger Update (GoTrader Style)
    await ledgerService.createTransaction(doc.tenantId, 1.0, {
      documentId: doc.id,
      cid: doc.cid,
      type: 'ASSET_ISSUANCE'
    });

    // 3. Odoo ERP Sync
    await odooService.syncAsset(doc.id, doc.cid, doc.tenant.name);

    // 4. Update Database
    const updatedDoc = await prisma.document.update({
      where: { id: documentId },
      data: { 
        status: 'TOKEN_MINTED',
        txHash: txHash
      }
    });

    res.json({ success: true, txHash, document: updatedDoc });
  } catch (error) {
    console.error('[Minting] Error:', error);
    res.status(500).json({ error: 'Minting failed' });
  }
});

app.get('/api/v1/userDocuments', async (req, res) => {
  try {
    const { address } = req.query;
    // For now, return recent documents if no address is provided, or filter by mock logic
    const documents = await prisma.document.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20
    });
    res.json({ documents });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user documents' });
  }
});

// Webhook for Docuseal / Certicámara
app.post('/api/v1/webhooks/docuseal', async (req, res) => {
  try {
    const { data, event } = req.body;
    console.log(`[Webhook] Received event: ${event}`);

    if (event === 'submission.completed') {
      const submissionId = data.id;
      const documentId = data.external_id; // Assume we passed our ID as external_id

      await prisma.document.update({
        where: { id: documentId },
        data: { 
          status: 'SEALED',
          metadata: { ...data, sealedAt: new Date().toISOString() }
        }
      });

      console.log(`[Webhook] Document ${documentId} successfully SEALED via signature.`);
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('[Webhook] Error:', error);
    res.status(500).send('Internal Error');
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 ACCET Legal Oracle Backend running on http://localhost:${PORT}`);
});
