import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useContext, createContext } from 'react'

// tạo 1 context
const MyContext = createContext()
const Screen1 = () => {
    const { hoTen, setHoTen } = useContext(MyContext)
    return (
        <View>
            <Text style={myStyle.hoTen}>Screen1: {hoTen}</Text>
        </View>
    )
}
const Screen2 = () => {
    const { hoTen, setHoTen } = useContext(MyContext)
    return (
        <View>
            <Text
                onPress={() => setHoTen('Nguyen Van B')}
                style={myStyle.hoTen}>Screen2</Text>
        </View>
    )
}
// tạo kho chứa dữ liệu của app
const MyContextProvider = (props) => {
    const { children } = props
    const [hoTen, setHoTen] = useState('Nguyen Van A')
    return (
        <MyContext.Provider value={{ hoTen, setHoTen }}>
            {children}
        </MyContext.Provider>
    )
}
const Demo1 = () => {
    return (
        <MyContextProvider>
            <Screen1 />
            <Screen2 />
        </MyContextProvider>
    )
}

export default Demo1

const myStyle = StyleSheet.create({
    hoTen: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold'
    }
})


// rnfe