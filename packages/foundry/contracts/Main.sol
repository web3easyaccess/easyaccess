// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {Nonces} from "@openzeppelin/contracts/utils/Nonces.sol";

contract Main is EIP712, Nonces {
    bytes32 internal constant PERMIT_TYPEHASH =
        keccak256(
            "_permit(address eoaOnwer, uint8 v, bytes32 r, bytes32 s,uint256 nonce)"
        );

    struct ContractInfo {
        address eoaOwner;
        uint256 gasUsedInUsdc;
    }
    // eoa => contracts
    mapping(address => address) userContracts;

    // constract => ContractInfo
    mapping(address => ContractInfo) contractInfos;

    address admin;

    constructor() EIP712("web3easyaccess", "1.0") {
        admin = msg.sender;
    }

    function chgAdmin(address newAdmin) external {
        require(msg.sender == admin, "must be admin!");
        admin = newAdmin;
    }

    error PermitFail(address);

    modifier _permit(
        address eoaOnwer,
        uint256 nonce, // same nonce can be used only once on the offchain application server
        uint8 v,
        bytes32 r,
        bytes32 s
    ) {
        require(msg.sender == admin, "must be admin!");

        bytes32 structHash = keccak256(
            abi.encode(PERMIT_TYPEHASH, eoaOnwer, nonce) // _useNonce(eoaOnwer))
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, v, r, s);
        if (signer != eoaOnwer) {
            revert PermitFail(eoaOnwer);
        }

        _;
    }

    function queryContractAddr(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external view _permit(eoaOnwer, nonce, v, r, s) returns (address) {
        return userContracts[eoaOnwer];
    }

    function permitRegister(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}

    function permitTransferETH(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}

    function permitTransferToken(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}

    function permitTransferNFT(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}

    function permitApprove(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}

    function permitApproveNFT(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}

    function permitApproveAllNFT(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}

    function permitMarketApprove(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}

    function permitMarketSWAP(
        address eoaOnwer,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoaOnwer, nonce, v, r, s) {}
}
