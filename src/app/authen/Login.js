import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import AxiosInstance from '../helpers/AxiosInstance'

const Login = (props) => {
  const { navigation } = props;
  const { isLogin, setIsLogin } = useContext(AppContext);

  const [email, setEmail] = useState('khanh9988@gmail.com');
  const [password, setPassword] = useState('123456');

  const onPressLogin = async () => {
    console.log('onPressLogin')
    // xử lý gọi api
    const body = {
      email: email,
      password: password
    }
    const result = await AxiosInstance()
      .post('/users/login', body);
    console.log(result);
    if (result.status == true) {
      setIsLogin(true)
    } else {
      Alert.alert('Thông báo', 'Đăng nhập không thành công');
    }
  }
  return (
    <View>
      <Text onPress={onPressLogin}>Login</Text>
      <Button title="Login" onPress={onPressLogin} />
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})