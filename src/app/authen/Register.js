import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import AxiosInstance from '../helpers/AxiosInstance';

const Register = (props) => {
  const [name, setName] = useState('Nguyen Minh Khanh');
  const [email, setEmail] = useState('khanh9988@gmail.com');
  const [password, setPassword] = useState('123456');
  const { navigation } = props;

  const onPressRegister = async () => {
    try {
      console.log('onPressRegister')
      // xử lý gọi api
      const body = {
        name: name,
        email: email,
        password: password
      }
      // đồng bộ
      // bất đồng bộ
      // xử lý bất đồng bộ như đồng bộ
      const result = await AxiosInstance()
        .post('/users/register', body);
      console.log(result);
      if (result.status == true) {
        navigation.navigate('Login');
      }
      else {
        Alert.alert('Thông báo', 'Đăng ký không thành công');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Thông báo', 'Đăng ký không thành công');
    }
  }

  return (
    <View>
      <Text>Register</Text>
      <Button title="Register"
        onPress={onPressRegister} />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})