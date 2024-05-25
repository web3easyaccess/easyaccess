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
    ) external _permit(eoa, nonce, v, r, s) {
        require(userContracts[eoa] == address(0), "already registered!");

        address userContract = address(new UserContract());
        userContracts[eoa] = userContract;
    }

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
    ) external _permit(eoa, nonce, v, r, s) {
        require(userContracts[eoa] != address(0), "not registered!");

        bytes32 structHash = keccak256(
            abi.encode(PERMIT_TYPEHASH, eoa2, nonce2) // _useNonce(eoa2))
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, v2, r2, s2);
        if (signer != eoa2) {
            revert PermitFail(eoa2);
        }

        address userContract = userContracts[eoa];
        userContracts[eoa2] = userContract;
        userContracts[eoa] = address(0);
    }

    /**
        认证签名并转出ETH
     */
    function permitTransferETH(
        address to,
        uint256 amount,
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {
        require(userContracts[eoa] != address(0), "not registered!");

        address userContract = userContracts[eoa];
        UserContract(userContract).transferETH(to, amount);
    }

    /**
        认证签名并转出token
     */
    function permitTransferToken(
        address token,
        address to,
        uint256 amount,
        address eoa,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external _permit(eoa, nonce, v, r, s) {
        require(userContracts[eoa] != address(0), "not registered!");

        address userContract = userContracts[eoa];
        UserContract(userContract).transferToken(token, to, amount);
    }

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
