import { StandardAccounts } from "@utils/standardAccounts"
import { BigNumber } from "ethers"
import { ethers } from "hardhat"

describe("Staked Token BPT", () => {
    let sa: StandardAccounts

    it("should pass", async () => {
        return true
    })

    it("should run function", async () => {
        const Contract = await ethers.getContractFactory("Prime");
        const contract = await Contract.deploy() 

        await contract.deployed()
        console.log("Contract deployed");
        
        let numOfSlaps = await contract.numOfSlaps()
        console.log("----------------------------");
        console.log("Slap count", numOfSlaps.toNumber());
        
        await contract.slapThatSimp();
        console.log("Slapped!");
        
        numOfSlaps = await contract.numOfSlaps()
        console.log("Slap count", numOfSlaps.toNumber());
        console.log("----------------------------");

        await contract.slapThatSimp();
        console.log("Slapped!");
        
        numOfSlaps = await contract.numOfSlaps()
        console.log("Slap count", numOfSlaps.toNumber());
        console.log("----------------------------");
        
        await contract.slapThatSimp();
        console.log("Slapped!");
        
        numOfSlaps = await contract.numOfSlaps()
        console.log("Slap count", numOfSlaps.toNumber());
        console.log("----------------------------");
    })
})
