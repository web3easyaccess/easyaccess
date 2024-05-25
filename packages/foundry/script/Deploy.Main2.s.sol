//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/Main.sol";

import {Script, console} from "forge-std/Script.sol";

contract MainScript is Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();
        Main m = new Main();
    }
}
