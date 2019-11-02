
const GravatarRegistry = artifacts.require("GravatarRegistry");

contract("GravatarRegistry", (accounts) => {
  let instance;
  const ownerAccount = accounts[0];
  const gravatarAccount = accounts[1];

  it("deploys a registry", async () => {
    instance = await GravatarRegistry.deployed({ from: ownerAccount });
    await instance.setMythicalGravatar({ from: ownerAccount });
  });

  it("fails to set a mythical gravatar from a non-owner", async () => {
    try {
      await instance.setMythicalGravatar({ from: gravatarAccount });
    } catch (e) {
      return;
    }

    assert.fail("expected to throw");
  });

  it("creates a gravatar", async () => {
    const nameExpected = "test";
    const urlExpected = "http://test.test";
    await instance.createGravatar(nameExpected, urlExpected, {
      from: gravatarAccount
    });

    const gravatarResult = await instance.getGravatar(gravatarAccount);
    assert.equal(gravatarResult[0], nameExpected);
    assert.equal(gravatarResult[1], urlExpected);
  });

  it("updates a gravatar name", async () => {
    const nameExpected = "test2";
  
    await instance.updateGravatarName(nameExpected, {
      from: gravatarAccount
    });

    const gravatarResult = await instance.getGravatar(gravatarAccount);
    assert.equal(gravatarResult[0], nameExpected);
  });

  it("updates a gravatar image", async () => {
    const urlExpected = "http://test2.test";

    await instance.updateGravatarImage(urlExpected, {
      from: gravatarAccount
    });

    const gravatarResult = await instance.getGravatar(gravatarAccount);
    assert.equal(gravatarResult[1], urlExpected);
  });
});
