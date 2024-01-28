import { StyleSheet, Text, View, Alert, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import AxiosInstance from '../helpers/AxiosInstance'

const Login = (props) => {
  const { navigation } = props;
  const { isLogin, setIsLogin } = useContext(AppContext);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    setEmailErrorMsg(isValid ? '' : 'Invalid email address');
    return isValid;
  };

  const validatePassword = (password) => {
    const isPasswordValid = password.length >= 6;
    setIsPasswordValid(isPasswordValid);
    setPasswordErrorMsg(isPasswordValid ? '' : 'Password must be at least 6 characters long');
    return isPasswordValid;
  }

  return (
    <KeyboardAvoidingView
      style={mystyles.containerKeyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={mystyles.container}>
          <Image
            resizeMode='center'
            style={mystyles.image}
            source={require('../../../assets/images/imagemain.png')} />
          <Text style={mystyles.title}>Welcome to Lungo !!</Text>
          <Text style={mystyles.content}>Login to Continue</Text>

          <View style={[mystyles.input, !isEmailValid && mystyles.invalidEmail]}>
            <TextInput
              keyboardType='email-address'
              color='white'
              placeholder='Email Address'
              placeholderTextColor='#828282'
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          {emailErrorMsg && (
            <Text style={{ color: '#FB7181', fontWeight: 'bold', fontSize: 13 }}>
              {emailErrorMsg}
            </Text>
          )}

          <View style={[mystyles.input, !isPasswordValid && mystyles.invalidEmail]}>
            <TextInput
              style={{ position: 'relative' }}
              color='white'
              placeholder='Password'
              secureTextEntry={!showPassword}
              placeholderTextColor='#828282'
              value={password}
              onChangeText={password => setPassword(password)}
            />

            <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 10, top: 15 }}>
              <Image
                source={require('../../../assets/images/iceye.png')}
              />
            </TouchableOpacity>
          </View>
          {passwordErrorMsg && (
            <Text style={{ color: '#FB7181', fontWeight: 'bold', fontSize: 13 }}>
              {passwordErrorMsg}
            </Text>
          )}

          <View style={mystyles.btnSignIn}>
            <TouchableOpacity onPress={onPressLogin} style={{ width: '100%' }}>
              <Text style={mystyles.touchLabel}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={mystyles.btnSignInGG}>
            <Image
              source={require('../../../assets/images/google.png')}
            />
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', marginRight: 55, width: '100%' }}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 40 }}>
            <TouchableOpacity>
              <Text style={{ color: '#828282', fontWeight: 'bold' }}>Don’t have account? Click</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
              <Text style={{ color: '#D17842', fontWeight: 'bold' }}> Register</Text>
            </TouchableOpacity>
          </Text>
          <Text style={{ color: '#828282', paddingTop: 25, fontWeight: 'bold' }}>
            Forget Password? Click <Text style={{ color: '#D17842' }}>Reset</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const mystyles = StyleSheet.create({

  invalidEmail: {
    borderColor: 'red'
  },

  btnSignInGG: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 65,
    width: '100%',
    justifyContent: 'space-evenly'
  },

  btnSignIn: {
    marginTop: 25,
    paddingVertical: 20,
    paddingHorizontal: 150,
    backgroundColor: '#D17842',
    borderRadius: 20,
    height: 65,
    width: '100%'
  },

  touchLabel: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    padding: 15,
    width: '100%',
    height: 55,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    color: '#828282'
  },

  content: {
    marginBottom: 20,
    marginTop: 16,
    fontSize: 15,
    color: '#828282',
    fontWeight: 'bold',
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  image: {
    marginTop: 80,
    width: 100,
    height: 100,
  },

  container: {
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'center'
  },

  containerKeyboard: {
    flex: 1,
    backgroundColor: '#0c0f14',
  }
})