import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const Login = () => {
  const { isLogin, setIsLogin } = useContext(AppContext)
  const onPressLogin = () => {
    console.log('onPressLogin')
    // xử lý gọi api
    setIsLogin(true)
  }
  return (
    <View>
      <Text onPress={onPressLogin}>Login</Text>
      <Button title="Login" onPress={onPressLogin} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})