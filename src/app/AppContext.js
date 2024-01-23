import { View, Text } from 'react-native'
import React, { useState, useContext, createContext } from 'react'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const { children } = props
    const [isLogin, setIsLogin] = useState(false);
    const [cart, setCart] = useState([]);

    return (
        <AppContext.Provider value={{
            isLogin, setIsLogin,
            cart, setCart
        }}>
            {children}
        </AppContext.Provider>
    )
}