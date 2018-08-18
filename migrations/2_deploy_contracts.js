var GravatarRegistry = artifacts.require("GravatarRegistry");

module.exports = function(deployer) {
  deployer.deploy(GravatarRegistry);
};
