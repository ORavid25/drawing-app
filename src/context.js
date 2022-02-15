import React from "react";

const SocialDrawerContext = React.createContext({});

function SocialDrawerProvider({children}){
    const [user,setUser] = React.useState(null);
   

    const value = {user, setUser};
    return <SocialDrawerContext.Provider value={value}>{children}</SocialDrawerContext.Provider>
}

export {SocialDrawerProvider, SocialDrawerContext};