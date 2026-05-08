const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Routes
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Single file upload
app.post('/api/v1/documents/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { tenantId } = req.body;
    
    // Simulate Filecoin CID generation (Lighthouse)
    // In production: await lighthouse.upload(req.file.path, process.env.LIGHTHOUSE_API_KEY)
    const mockCid = `bafkrei${uuidv4().replace(/-/g, '')}`;

    res.json({
      success: true,
      cid: mockCid,
      filename: req.file.originalname,
      status: 'UPLOADED',
      tenantId: tenantId || 'POK_PILOT_001',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Internal server error during upload' });
  }
});

// Get document status
app.get('/api/v1/documents/:cid/status', (req, res) => {
  const { cid } = req.params;
  
  // Mock status progression logic for demo purposes
  // In a real app, this would query the DB or the FVM Oracle
  res.json({
    cid,
    status: 'ORACLE_PASSED',
    compliance: 'ERC-3643',
    stateSealed: true,
    checkedAt: new Date().toISOString()
  });
});

// Batch status (mock)
app.get('/api/v1/documents/batch/status', (req, res) => {
  res.json({
    batchId: uuidv4(),
    total: 2,
    completed: 2,
    documents: [
      { cid: 'bafkrei123abc', status: 'TOKEN_MINTED', title: 'Computer Science Degree' },
      { cid: 'bafkreiXYZdef', status: 'SEALED', title: 'POK Blockchain Certificate' }
    ]
  });
});

// Public verification endpoint
app.get('/api/v1/verify/:cid', (req, res) => {
  const { cid } = req.params;
  // Simulating a "Read-only" gasless verification
  res.json({
    cid,
    valid: true,
    stateSealed: true,
    mletrCompliant: true,
    verifiedAt: new Date().toISOString(),
    network: 'Base Mainnet',
    tokenStandard: 'ERC-3643'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 ACCET Legal Oracle Backend running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop\n`);
});
