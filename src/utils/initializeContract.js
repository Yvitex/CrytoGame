import { ethers } from "ethers"
import abi from "../assets/abi/WebsiteContract.json";

const contractAddress = "0xfdA8D0c4d7d787edDbD25Fc201F00EDdEd4c57B5";


export const initContract = () => {
    const {ethereum} = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const importedContract = new ethers.Contract(contractAddress, abi.abi, signer);
    return importedContract;
}