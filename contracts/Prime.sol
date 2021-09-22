// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Prime is ERC20, Ownable {
    uint16[] public primes = [1, 2, 3, 5];
    uint256 public numOfSlaps = 0;

    constructor() ERC20("SIMMO", "SIMP") {
        _mint(msg.sender, 1);
    } 

    function slapThatSimp() public {
        require(numOfSlaps < 2, "Simmo needs a rest");
        numOfSlaps += 1;
    }

    function resetTheSlaps() public onlyOwner() {
        numOfSlaps = 0;
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }
}
