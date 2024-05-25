// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {Nonces} from "@openzeppelin/contracts/utils/Nonces.sol";

import "./IUserContract.sol";
import "./UserContract.sol";

contract Main is EIP712, Nonces {
    bytes32 internal constant PERMIT_TYPEHASH =
        keccak256(
            "_permit(address eoa, uint256 nonce, uint8 v, bytes32 r, bytes32 s)"
        );

    // eoa => contracts
    mapping(address => address) userContracts;

    address admin;

    address userContractTemplate;

    constructor() EIP712("web3easyaccess", "1.0") {
        admin = msg.sender;
        userContractTemplate = address(new UserContract());
    }

    function chgAdmin(address newAdmin) external {
        require(msg.sender == admin, "must be admin!");
        admin = newAdmin;
    }

    error PermitFail(address);

    modifier _permit(
        address eoa,
        uint256 nonce, // same nonce can be used only once on the offchain application server
        uint8 v,
        bytes32 r,
        bytes32 s
    ) {
        require(msg.sender == admin, "must be admin!");

        bytes32 structHash = keccak256(
            abi.encode(PERMIT_TYPEHASH, eoa, nonce) // _useNonce(eoa))
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, v, r, s);
        if (signer != eoa) {
            revert PermitFail(eoa);
        }

        _;
    }

    /**
        认证签名并返回资产合约。不存在则返回0
     */
    function queryContractAddr(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external view _permit(eoa, nonce, v, r, s) returns (address) {
        return userContracts[eoa];
    }

    /**
        认证签名并创建新的资产合约
     */
    function permitRegister(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {}

    /**
        认证新、旧签名并转移资产合约的owner。即修改密码。
     */
    function permitChgOwnerPwd(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s,
        address eoa2, // 新密码对应的信息
        uint256 nonce2,
        uint8 v2,
        bytes32 r2,
        bytes32 s2
    ) external _permit(eoa, nonce, v, r, s) {}

    /**
        认证签名并转出ETH
     */
    function permitTransferETH(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {}

    /**
        认证签名并转出token
     */
    function permitTransferToken(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {}

    //////////////////////////// 下面的部分优先级降低
    //
    function permitTransferNFT(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {}

    function permitApprove(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {}

    function permitApproveNFT(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {}

    function permitApproveAllNFT(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {}

    function permitMarketSWAP(
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {}
}
