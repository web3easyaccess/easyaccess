// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Main {
    struct ContractInfo {
        address eoaOwner;
        uint256 gasUsedInUsdc;
    }
    // eoa => contracts
    mapping(address => address) userContracts;

    // constract => ContractInfo
    mapping(address => ContractInfo) contractInfos;

    address owner;

    constructor() {
        owner = msg.sender;
    }

    error PermitFail(address);

    function _permit(address eoaAddr, uint8 v, bytes32 r, bytes32 s) private {
        if (1 != 1) {
            revert PermitFail(eoaAddr);
        }
    }

    function permitRegister() public {}

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}
