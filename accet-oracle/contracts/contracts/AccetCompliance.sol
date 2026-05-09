// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ComplianceRegistry is Ownable {
    mapping(address => bool) private _verified;
    event VerifierUpdated(address indexed who, bool status);

    function setVerified(address who, bool status) external onlyOwner {
        _verified[who] = status;
        emit VerifierUpdated(who, status);
    }

    function isVerified(address who) external view returns (bool) {
        return _verified[who];
    }
}

contract AccetSBT is ERC721, Ownable {
    uint256 private _nextId;
    ComplianceRegistry public registry;
    mapping(uint256 => string) private _tokenURIs;

    event MintSBT(address indexed to, uint256 indexed tokenId, string tokenURI);

    constructor(address registryAddress) ERC721("ACCET SBT", "ASBT") {
        registry = ComplianceRegistry(registryAddress);
        _nextId = 1;
    }

    function mintTo(address to, string calldata tokenURI_) external onlyOwner returns (uint256) {
        bool ok = registry.isVerified(to);
        require(ok, "Recipient not compliance-verified");
        uint256 id = _nextId++;
        _safeMint(to, id);
        _tokenURIs[id] = tokenURI_;
        emit MintSBT(to, id, tokenURI_);
        return id;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize) internal virtual override {
        require(from == address(0) || to == address(0), "SBT: transfer disabled");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return _tokenURIs[tokenId];
    }

    function burn(uint256 tokenId) external onlyOwner {
        _burn(tokenId);
    }
}
