# 👩‍🚀 Gravity

Gravity is [Gravatar](http://gravatar.com/) for Ethereum addresses. You can make one here: [gravity.cool](https://gravity.cool)

Gravity is implemented as an Ethereum smart contract where account holders can set and update their own names and images to be used as avatars in decentralized applications. Apps, dapps and wallets can then easily pull gravatar names and images from the smart contract to display them as avatars in-app. Enjoy!

The smart contract is running at address `0x2E645469f354BB4F5c8a05B3b30A929361cf77eC`
 
## Gravitate. Aka Create Your Gravatar.

You can make one here: [gravity.cool](https://gravity.cool)

Or in MyEtherWallet:

Go to the contracts page: https://www.myetherwallet.com/#contracts

In the Contract Address field, enter: `0x2e645469f354bb4f5c8a05b3b30a929361cf77ec`

In the ABI / JSON Interface box, enter:

```
[{"constant":false,"inputs":[{"name":"_displayName","type":"string"},{"name":"_imageUrl","type":"string"}],"name":"createGravatar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"displayName","type":"string"},{"indexed":false,"name":"imageUrl","type":"string"}],"name":"NewGravatar","type":"event"},{"constant":false,"inputs":[],"name":"setMythicalGravatar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"displayName","type":"string"},{"indexed":false,"name":"imageUrl","type":"string"}],"name":"UpdatedGravatar","type":"event"},{"constant":false,"inputs":[{"name":"_imageUrl","type":"string"}],"name":"updateGravatarImage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_displayName","type":"string"}],"name":"updateGravatarName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getGravatar","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"gravatars","outputs":[{"name":"owner","type":"address"},{"name":"displayName","type":"string"},{"name":"imageUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"gravatarToOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ownerToGravatar","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
```

Click on the button that says 'Access'. You may also need to connect MetaMask or another wallet (it will tell you)

Then from the 'Read/Write Contract' dropdown, select 'createGravatar'

Enter in your name (example: `dani`) and a url (including http://) to a square image of you (example: `https://example.com/image.png`)

Then click the button that says 'Write'

You will be asked to sign the transaction with MetaMask (or whichever wallet you use)

💃You're done! Congrats on the new Gravatar!

Once the transaction is verified, you can then choose getGravatar from the 'Read/Write Contract' dropdown, enter in your ethereum address, and see your gravatar name and image url.

## For Developers: Adding Support for Gravatar:

Three steps:

### Step 1: Add Web3

Assuming you have already included (`npm i web3 --save`) and initialized Web3:

```
// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
  // Use the browser's ethereum provider
  var provider = web3.currentProvider
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io"));
}
```

### Step 2: Initialize GravatarRegistry Contract

```
let GravatarRegistryContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_displayName","type":"string"},{"name":"_imageUrl","type":"string"}],"name":"createGravatar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"displayName","type":"string"},{"indexed":false,"name":"imageUrl","type":"string"}],"name":"NewGravatar","type":"event"},{"constant":false,"inputs":[],"name":"setMythicalGravatar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"displayName","type":"string"},{"indexed":false,"name":"imageUrl","type":"string"}],"name":"UpdatedGravatar","type":"event"},{"constant":false,"inputs":[{"name":"_imageUrl","type":"string"}],"name":"updateGravatarImage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_displayName","type":"string"}],"name":"updateGravatarName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getGravatar","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"gravatars","outputs":[{"name":"owner","type":"address"},{"name":"displayName","type":"string"},{"name":"imageUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"gravatarToOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ownerToGravatar","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]);

let GravatarRegistry = GravatarRegistryContract.at('0x2E645469f354BB4F5c8a05B3b30A929361cf77eC');

```

Now you can interact with gravatars:

### Step 3: Profit

Here are the methods you can now do:

#### Create a new gravatar:

Name is a string. Example: `dani`
imageUrl is a string pointing at a gravatar image (preferred square images). Example: `https://example.com/image.png`

```
GravatarRegistry.createGravatar(name, imageUrl)
```

#### Check if the user has a gravatar:

```
GravatarRegistry.getGravatar(web3.eth.accounts[0], function(err, res) {
  if (res[0] !== " ") { 
     // user has a gravatar
  }
})
```

#### Get a user's gravatar:

Address is an ethereum account address, passed in as a string. Example: `0x8d3e809fbd258083a5ba004a527159da535c8aba`
To pass in the current user's address, pass in `web3.eth.accounts[0]`

```
GravatarRegistry.getGravatar(address)
```

#### Update a user's gravatar:

Update the gravatar name:

```
GravatarRegistry.updateGravatarName(name)
```

Update the gravatar image:

```
GravatarRegistry.updateGravatarImage(imageUrl)
```

#### Listening for events

Gravity emits two event types: `NewGravatar` and `UpdatedGravatar`. Both return the following information: (id, owner address, name, image url)

## Development / Running The Gravatar Registry Smart Contract Locally:

Clone this repo, then delete the .json files under <code>build/contracts</code>

```
npm i -g truffle
truffle develop
```
This will open up the truffle console. Then do:

```
compile
migrate
```

Now you can interact with the contract:

```
GravatarRegistry.at("0x345ca3e014aaf5dca488057592ee47305d9b3e10").createGravatar("dani", "https://example.com/link-to-image.jpg")
```

```
GravatarRegistry.at("0x345ca3e014aaf5dca488057592ee47305d9b3e10").getGravatar("0x627306090abab3a6e1400e9345bc60c78a8bef57")
```

```
GravatarRegistry.at("0x345ca3e014aaf5dca488057592ee47305d9b3e10").updateGravatarName("ironman")
GravatarRegistry.at("0x345ca3e014aaf5dca488057592ee47305d9b3e10").updateGravatarImage("https://example.com/link-to-new-image.jpg")
```

When you make changes, just delete the .json files under <code>build/contracts</code> and run <code>compile</code> and <code>migrate</code> again.
