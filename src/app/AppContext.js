import { View, Text } from 'react-native'
import React, { useState, useContext, createContext } from 'react'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const { children } = props
    const [isLogin, setIsLogin] = useState(false);
    const [cart, setCart] = useState([]);
    const [nameInfo, setNameInfo] = useState("");
    const [emailInfo, setEmailInfo] = useState("");
    const [passwordInfo, setPasswordInfo] = useState("");
    const [cartHistory, setCartHistory] = useState("");

    return (
        <AppContext.Provider value={{
            isLogin, setIsLogin,
            cart, setCart,
            nameInfo, setNameInfo,
            emailInfo, setEmailInfo,
            passwordInfo, setPasswordInfo,
            cartHistory, setCartHistory
        }}>
            {children}
        </AppContext.Provider>
    )
}