// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        uint id;
        address owner;
        string location;
        bool isAvailable;
    }
    
    mapping(uint => Land) public lands;
    uint public nextId = 0;
    address public admin;

    event LandRegistered(uint id, address owner, string location);
    event LandTransferred(uint id, address from, address to);
    event LandStatusUpdated(uint id, bool isAvailable);

    modifier onlyAdmin(){
        require(msg.sender == admin, "Not authorized");
        _;
    }

    constructor(){
        admin = msg.sender; // Change this to the controller's email
    }

    function registerLand(string memory _location) public onlyAdmin  {
        lands[nextId] = Land(nextId, msg.sender, _location, true);
        emit LandRegistered(nextId, msg.sender, _location);
        nextId++;
    }

    function transferLand(uint _id, address _newOwner) public {
        require(lands[_id].owner == msg.sender, "Not the owner");
        lands[_id].owner = _newOwner;
        lands[_id].isAvailable = false;
        emit LandTransferred(_id, msg.sender, _newOwner);
    }

    function updateLandStatus(uint _id, bool _isAvailable) public {
        require(lands[_id].owner == msg.sender, "Not the owner");
        lands[_id].isAvailable = _isAvailable;
        emit LandStatusUpdated(_id, _isAvailable);
    }

    function getLand(uint _id) public view returns (Land memory) {
        return lands[_id];
    }

    // New function to get all registered land parcels
    function getAllLands() public view returns (Land[] memory) {
        Land[] memory allLands = new Land[](nextId);
        for (uint i = 0; i < nextId; i++) {
            allLands[i] = lands[i];
        }
        return allLands;
    }
}
