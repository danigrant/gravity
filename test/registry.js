
const GravatarRegistry = artifacts.require("GravatarRegistry");

contract("GravatarRegistry", (accounts) => {
  let instance;

  before(async () => {
    instance = await GravatarRegistry.deployed();
  });

  it("creates a gravatar", async () => {
    const nameExpected = "test";
    const urlExpected = "http://test.test";
    await instance.createGravatar(nameExpected, urlExpected, {
      from: accounts[0]
    });

    const gravatarResult = await instance.getGravatar(accounts[0]);
    assert.equal(gravatarResult[0], nameExpected);
    assert.equal(gravatarResult[1], urlExpected);
  });

  it("updates a gravatar name", async () => {
    const nameExpected = "test2";
  
    await instance.updateGravatarName(nameExpected);

    const gravatarResult = await instance.getGravatar(accounts[0]);
    assert.equal(gravatarResult[0], nameExpected);
  });

  it("updates a gravatar image", async () => {
    const urlExpected = "http://test2.test";

    await instance.updateGravatarImage(urlExpected);

    const gravatarResult = await instance.getGravatar(accounts[0]);
    assert.equal(gravatarResult[1], urlExpected);
  });
});
