import { ethers } from "ethers"
import abi from "../assets/abi/WebsiteContract.json";

export const contractAddress = "0x5ab631a65080165EcfBf12b430A089AB424736DF";
const {ethereum} = window;

export const initContract = () => {
    if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const importedContract = new ethers.Contract(contractAddress, abi.abi, signer);
        return importedContract;
    }
}

export const getChainId = async () => {
    if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const {chainId} = await provider.getNetwork();
        console.log(chainId)
        return chainId;
    }
}