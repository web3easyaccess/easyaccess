// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {Nonces} from "@openzeppelin/contracts/utils/Nonces.sol";

import "./IUserContract.sol";
import "./UserContract2.sol";

contract Main is EIP712, Nonces {
    bytes32 internal constant PERMIT_TYPEHASH =
        keccak256("_permit(address eoa,uint256 nonce)");

    // eoa => contracts
    mapping(address => address) userContracts;

    address admin;

    address userContractTemplate;

    constructor() EIP712("web3easyaccess", "1.0") {
        admin = msg.sender;
        // userContractTemplate = address(new UserContract());
    }

    function chgAdmin(address newAdmin) external {
        require(msg.sender == admin, "must be admin!");
        admin = newAdmin;
    }

    function DOMAIN_SEPARATOR() external view virtual returns (bytes32) {
        return _domainSeparatorV4();
    }

    error PermitFail(address);

    modifier _permit(
        address eoa,
        uint256 nonce, // same nonce can be used only once on the offchain application server
        bytes calldata signature
    ) {
        require(msg.sender == admin, "must be admin!");

        bytes32 structHash = keccak256(
            abi.encode(PERMIT_TYPEHASH, eoa, nonce) // _useNonce(eoa))
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, signature);

        require(signer == eoa, "sign error!");

        _;
    }

    /**
        认证签名并返回资产合约。不存在则返回0
     */
    function queryContractAddr(
        address eoa,
        uint256 nonce,
        bytes calldata signature
    ) external view _permit(eoa, nonce, signature) returns (address) {
        return userContracts[eoa];
    }

    /**
        认证签名并创建新的资产合约
     */
    function permitRegister(
        address eoa,
        uint256 nonce,
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) {
        require(userContracts[eoa] == address(0), "already registered!");

        address userContract = address(new UserContract2());
        userContracts[eoa] = userContract;
    }

    /**
        认证签名并创建新的资产合约
     */
    function permitQueryOrRegister(
        address eoa,
        uint256 nonce,
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) returns (address) {
        if (userContracts[eoa] == address(0)) {
            address userContract = address(new UserContract2());
            userContracts[eoa] = userContract;
            return userContract;
        } else {
            return userContracts[eoa];
        }
    }

    /**
        认证新、旧签名并转移资产合约的owner。即修改密码。
     */
    function permitChgOwnerPwd(
        address eoa,
        uint256 nonce,
        bytes calldata signature,
        address eoa2, // 新密码对应的信息
        uint256 nonce2,
        bytes calldata signature2
    ) external _permit(eoa, nonce, signature) {
        require(userContracts[eoa] != address(0), "not registered!");

        bytes32 structHash = keccak256(
            abi.encode(PERMIT_TYPEHASH, eoa2, nonce2) // _useNonce(eoa2))
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address signer = ECDSA.recover(hash, signature2);
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
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) {
        require(userContracts[eoa] != address(0), "not registered!");

        address userContract = userContracts[eoa];
        //  payable(UserContract2(userContract)).transferETH(to, amount);
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
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) {
        require(userContracts[eoa] != address(0), "not registered!");

        address userContract = userContracts[eoa];
        // UserContract2(userContract).transferToken(token, to, amount);
    }

    //////////////////////////// 下面的部分优先级降低
    //
    function permitTransferNFT(
        address eoa,
        uint256 nonce,
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) {}

    function permitApprove(
        address eoa,
        uint256 nonce,
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) {}

    function permitApproveNFT(
        address eoa,
        uint256 nonce,
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) {}

    function permitApproveAllNFT(
        address eoa,
        uint256 nonce,
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) {}

    function permitMarketSWAP(
        address eoa,
        uint256 nonce,
        bytes calldata signature
    ) external _permit(eoa, nonce, signature) {}
}
