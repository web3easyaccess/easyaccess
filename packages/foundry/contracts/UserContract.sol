// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {Nonces} from "@openzeppelin/contracts/utils/Nonces.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./IUserContract.sol";

contract UserContract is IUserContract {
    uint256 public gasUsedInUsdc;
    address admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }

    function accumulateGasInUsdc(uint256 _gasInUsdc) external onlyAdmin {
        gasUsedInUsdc += _gasInUsdc;
    }

    function transferETH(address to, uint256 amount) external payable override {
        payable(to).transfer(amount);
    }

    function transferToken(
        address token,
        address to,
        uint256 amount
    ) external override {
        IERC20(token).transfer(to, amount);
    }

    function TransferNFT(address token, address to) external override {
        // transfer nft
    }

    function Approve(
        address token,
        address operator,
        uint256 amount
    ) external override {
        // approve token
    }

    function ApproveNFT(
        address nft,
        address operator,
        uint256 nftId
    ) external override {
        // approve nft
    }

    function ApproveAllNFT(address nft, address operator) external override {
        // approve all nft
    }
}
