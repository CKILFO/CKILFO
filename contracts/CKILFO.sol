// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CKILFO is Initializable, ERC20Upgradeable, AccessControlUpgradeable {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    function initialize() public initializer {
        __ERC20_init("CKILFO Token", "CKF");
        __AccessControl_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);

        uint256 initialSupply = 1_000_000 * 10 ** decimals();
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        require(to != address(0), "CKILFO: mint to zero address");
        _mint(to, amount);
    }
}
