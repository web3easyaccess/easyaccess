// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {Nonces} from "@openzeppelin/contracts/utils/Nonces.sol";

import "./IUserContract.sol";

abstract contract UserContract is IUserContract {
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
}
