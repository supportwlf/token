// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract WLFToken is ERC20Burnable {
    uint public INITIAL_SUPPLY = 100 * 10**9 * 10**18;

    constructor() ERC20("Woman Life Freedom Token", "WLF") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
