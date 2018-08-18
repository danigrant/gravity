# Gravatar For Ethereum Addresses


## Dev:
First, delete the .json files under <code>build/contracts</code>

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
