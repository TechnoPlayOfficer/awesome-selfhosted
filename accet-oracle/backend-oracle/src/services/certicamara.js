// Certicamara Bridge Service
const axios = require('axios');
const crypto = require('crypto');
async function sealDocument(cidArray) {
  const hash = crypto.createHash('sha256').update(cidArray.join(',')).digest('hex');
  const r = await axios.post(process.env.CERTICAMARA_API_URL + '/seal',
    { hash, purpose: 'ACCET_LEGAL_ORACLE' },
    { headers: { Authorization: 'Bearer ' + process.env.CERTICAMARA_TOKEN } });
  return { hash, certSignature: r.data.signature, certifiedAt: r.data.timestamp, authority: 'CERTICAMARA_CO' };
}
async function sealWithDocuseal(cidArray) {
  return { hash: 'DOCUSEAL_FALLBACK', certSignature: 'MOCK', certifiedAt: new Date().toISOString() };
}
module.exports = { sealDocument, sealWithDocuseal };
