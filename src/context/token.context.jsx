import { createContext, useState } from "react";

export const TokenContext = createContext({
    websiteContract: null,
    setWebsiteContract: () => null
});

export const TokenContextProvider = ({children}) => {
    const [websiteContract, setWebsiteContract] = useState(null);
    const value = {websiteContract, setWebsiteContract};
    
    return (
        <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
    )
} 