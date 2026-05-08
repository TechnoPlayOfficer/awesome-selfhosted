// Filecoin Service
const lighthouse = require('@lighthouse-web3/sdk');
async function uploadDocument(filePath, apiKey) {
  const r = await lighthouse.upload(filePath, apiKey);
  return { cid: r.data.Hash, size: r.data.Size };
}
async function verifyCID(cid) {
  const s = await lighthouse.dealStatus(cid);
  return { valid: s.data.length > 0, deals: s.data };
}
async function batchUpload(filePaths, apiKey, onProgress) {
  const results = [];
  for (let i = 0; i < filePaths.length; i++) {
    results.push(await uploadDocument(filePaths[i], apiKey));
    onProgress?.({ index: i, total: filePaths.length });
  }
  return results;
}
module.exports = { uploadDocument, verifyCID, batchUpload };
