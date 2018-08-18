var GravatarFactory = artifacts.require("GravatarFactory");

module.exports = function(deployer) {
  deployer.deploy(GravatarFactory);
};
