//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/Main.sol";

import {Script, console} from "forge-std/Script.sol";

contract MainScript is Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();
        Main m = new Main(); // 0x2988a4527a8cCA119478f7F48930Ea036F31e8b4
    }
}

/*
// 0x707a01ca104206ffffc5220fa4cd423f49829999

forge script script/DeployMain.s.sol:MainScript --private-key 0xeed8516535f76a54101329938daf4f1b0c4dca98f21172895c54ca135f1eba8f --broadcast --rpc-url https://eth-sepolia.g.alchemy.com/v2/UBel_pWBAqDuBkAHTtrnVvPPzAhPdfqW --slow --via-ir --legacy --verify
*/