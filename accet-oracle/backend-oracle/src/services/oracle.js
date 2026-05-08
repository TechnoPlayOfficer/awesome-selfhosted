// Oracle FVM Service
require('dotenv').config();
const { ethers } = require('ethers');
const ABI = ["function verifyCID(string) view returns (bool,uint8)","function revoke(string) returns (bool)"];
async function interrogateOracle(cid) {
  const provider = new ethers.JsonRpcProvider(process.env.FVM_RPC_URL);
  const contract = new ethers.Contract(process.env.ORACLE_CONTRACT, ABI, provider);
  const [valid, status] = await contract.verifyCID(cid);
  return { cid, valid, status: ['UNKNOWN','VALID','DRIFT','REVOKED'][status] };
}
async function revokeDocument(cid, key) {
  const provider = new ethers.JsonRpcProvider(process.env.FVM_RPC_URL);
  const signer = new ethers.Wallet(key, provider);
  const contract = new ethers.Contract(process.env.ORACLE_CONTRACT, ABI, signer);
  const tx = await contract.revoke(cid); await tx.wait();
  return { cid, revoked: true, txHash: tx.hash };
}
module.exports = { interrogateOracle, revokeDocument };
