// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title LegalOracle - FVM integrity interrogation
contract LegalOracle {
    enum Status { UNKNOWN, VALID, DRIFT_DETECTED, REVOKED }
    mapping(string => Status) public cidStatus;
    address public owner;

    event OracleVerdict(string cid, bool valid, Status status);
    event DocumentRevoked(string cid);

    constructor() { owner = msg.sender; }
    modifier onlyOwner() { require(msg.sender == owner, "Not authorized"); _; }

    function setCIDStatus(string calldata cid, Status status) external onlyOwner {
        cidStatus[cid] = status;
    }

    /// @notice Read-only verification — zero gas for caller
    function verifyCID(string calldata cid) external view returns (bool valid, Status status) {
        status = cidStatus[cid];
        valid = (status == Status.VALID);
        return (valid, status);
    }

    function revoke(string calldata cid) external onlyOwner returns (bool) {
        cidStatus[cid] = Status.REVOKED;
        emit DocumentRevoked(cid);
        return true;
    }
}
