// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "forge-std/Test.sol";
import "../contracts/PriceConsumer.sol";

contract PriceConsumerTest is Test {
    PriceConsumer public priceConsumer;

    function setUp() public {
        priceConsumer = new PriceConsumer();
    }

    function testGetThePrice() public view {
        console.logInt(priceConsumer.getThePrice());
    }
}
