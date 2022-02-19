import React from "react";

const SocialDrawerContext = React.createContext({});

function SocialDrawerProvider({children}){
    const [user,setUser] = React.useState(null);
    const [socket,setSocket] = React.useState(null);

    const value = {user, setUser,socket,setSocket};
    return <SocialDrawerContext.Provider value={value}>{children}</SocialDrawerContext.Provider>
}

export {SocialDrawerProvider, SocialDrawerContext};