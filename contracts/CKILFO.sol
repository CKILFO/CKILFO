// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CKILFO is Initializable, ERC20BurnableUpgradeable, PausableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable {
    using SafeERC20 for IERC20;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

    uint256 private _cap;

    function initialize() public initializer {
        __ERC20_init("CKILFO Token", "CKF");
        __ERC20Burnable_init();
        __Pausable_init();
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);

        _cap = 1_000_000 * 10 ** decimals();
        _mint(msg.sender, _cap);
    }

    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) whenNotPaused {
        require(to != address(0), "CKILFO: mint to zero address");
        require(totalSupply() + amount <= _cap, "CKILFO: cap exceeded");
        _mint(to, amount);
    }

    // ✅ NEW : Batch mint sécurisé
    function batchMint(address[] calldata recipients, uint256[] calldata amounts) external onlyRole(MINTER_ROLE) whenNotPaused {
        require(recipients.length == amounts.length, "CKILFO: recipients and amounts length mismatch");

        for (uint256 i = 0; i < recipients.length; i++) {
            require(recipients[i] != address(0), "CKILFO: mint to zero address");
            require(totalSupply() + amounts[i] <= _cap, "CKILFO: cap exceeded");
            _mint(recipients[i], amounts[i]);
        }
    }

    // ✅ NEW : Récupération de tokens ERC20 bloqués dans le contrat
    function recoverERC20(address tokenAddress, uint256 tokenAmount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(tokenAddress != address(this), "CKILFO: cannot recover CKILFO tokens");
        IERC20(tokenAddress).safeTransfer(msg.sender, tokenAmount);
    }

    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    function cap() public view returns (uint256) {
        return _cap;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}
}
