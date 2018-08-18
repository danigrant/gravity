pragma solidity ^0.4.2;

contract GravatarFactory {
  event NewGravatar(uint id, address owner, string displayName, string imageUrl);
  event UpdatedGravatar(uint id, address owner, string displayName, string imageUrl);

  struct Gravatar {
    address owner;
    string displayName;
    string imageUrl;
  }

  Gravatar[] public gravatars;

  mapping (uint => address) public gravatarToOwner;
  mapping (address => uint) public ownerToGravatar;

  function createGravatar(string _displayName, string _imageUrl) public {
    require(ownerToGravatar[msg.sender] == 0);
    uint id = gravatars.push(Gravatar(msg.sender, _displayName, _imageUrl)) - 1;

    gravatarToOwner[id] = msg.sender;
    ownerToGravatar[msg.sender] = id;

    emit NewGravatar(id, msg.sender, _displayName, _imageUrl);
  }

  function getGravatar(address owner) public view returns (string, string) {
    uint id = ownerToGravatar[owner];
    return (gravatars[id].displayName, gravatars[id].imageUrl);
  }

  function updateGravatarName(string _displayName) public {
    uint id = ownerToGravatar[msg.sender];

    require(ownerToGravatar[msg.sender] != 0);
    require(msg.sender == gravatars[id].owner);

    gravatars[id].displayName = _displayName;
    emit UpdatedGravatar(id, msg.sender, _displayName, gravatars[id].imageUrl);
  }

  function updateGravatarImage(string _imageUrl) public {
    uint id = ownerToGravatar[msg.sender];

    require(ownerToGravatar[msg.sender] != 0);
    require(msg.sender == gravatars[id].owner);

    gravatars[id].imageUrl =  _imageUrl;
    emit UpdatedGravatar(id, msg.sender, gravatars[id].displayName, _imageUrl);
  }
}
