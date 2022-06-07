// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CoffeePortal {
    uint256 totalCoffees;

    constructor() {
        console.log("Contract, Smart");
    }

    function coffee() public{
        totalCoffees += 1;
        console.log("%s has offered a coffee", msg.sender);
    }

    function getTotalCoffees() public view returns (uint256) {
        console.log("We have %d coffees at all!", totalCoffees);
        return totalCoffees;
    }
}