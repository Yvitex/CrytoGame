import { createContext, useState } from "react";

export const TokenContext = createContext({
    websiteContract: null,
    setWebsiteContract: () => null,
    chainId: null ,
    setChainId: () => null,
});

export const TokenContextProvider = ({children}) => {
    const [websiteContract, setWebsiteContract] = useState(null);
    const [chainId, setChainId] = useState(null);
    const value = {websiteContract, setWebsiteContract, setChainId, chainId};
    
    return (
        <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
    )
} 