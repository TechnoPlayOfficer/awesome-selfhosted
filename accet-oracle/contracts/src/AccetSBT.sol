// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title AccetSBT - Soulbound Token for Academic Credentials
/// @notice Non-transferable token per EIP-5192 with legal metadata
contract AccetSBT is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    struct LegalMetadata {
        string cid;           // Filecoin CID
        string certSignature; // Certicamara signature
        address holder;       // Graduate wallet
        uint256 issuedAt;
        bool revoked;
    }

    mapping(uint256 => LegalMetadata) public tokenMeta;
    mapping(address => uint256) public holderToken;

    event TokenMinted(uint256 tokenId, address holder, string cid);
    event TokenRevoked(uint256 tokenId, string reason);

    constructor() ERC721("ACCET Academic Credential", "ACCET-SBT") Ownable(msg.sender) {}

    /// @notice Mint SBT to graduate — only once per address
    function mint(address to, string calldata cid, string calldata certSignature) external onlyOwner returns (uint256) {
        require(holderToken[to] == 0, "Holder already has credential");
        _tokenIdCounter++;
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        tokenMeta[tokenId] = LegalMetadata(cid, certSignature, to, block.timestamp, false);
        holderToken[to] = tokenId;
        emit TokenMinted(tokenId, to, cid);
        return tokenId;
    }

    /// @notice Institutional revocation (fraud detection)
    function revoke(uint256 tokenId, string calldata reason) external onlyOwner {
        tokenMeta[tokenId].revoked = true;
        emit TokenRevoked(tokenId, reason);
    }

    /// @notice Soulbound: block all transfers
    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = _ownerOf(tokenId);
        require(from == address(0) || to == address(0), "SBT: non-transferable");
        return super._update(to, tokenId, auth);
    }
}
