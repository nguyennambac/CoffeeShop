import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import AxiosInstance from '../helpers/AxiosInstance';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [retypePasswordError, setRetypePasswordError] = useState('');

  const navigation = useNavigation();

  const isEmailValid = (email) => {
    // Biểu thức chính quy kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onPressRegister = async () => {
    // Kiểm tra dữ liệu nhập liệu trước khi gọi API
    if (!name) {
      setNameError('Please enter your name');
      return;
    } else {
      setNameError('');
    }

    if (!email || !isEmailValid(email)) {
      setEmailError('Please enter a valid email');
      return;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return;
    } else {
      setPasswordError('');
    }

    if (!retypePassword || retypePassword !== password) {
      setRetypePasswordError('Passwords do not match');
      return;
    } else {
      setRetypePasswordError('');
    }

    try {
      console.log('onPressRegister');
      // xử lý gọi api
      const body = {
        name: name,
        email: email,
        password: password
      };
      const result = await AxiosInstance().post('/users/register', body);
      console.log(result);
      if (result.status === true) {
        navigation.navigate('Login');
      } else {
        Alert.alert('Thông báo', 'Đăng ký không thành công');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Thông báo', 'Đăng ký không thành công');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={mystyles.containerKeyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={mystyles.container}>
          <Image resizeMode='center' style={mystyles.image} source={require('../../../assets/images/imagemain.png')} />
          <Text style={mystyles.title}>Welcome to Lungo !!</Text>
          <Text style={mystyles.content}>Register to Continue</Text>

          <View style={mystyles.input}>
            <TextInput
              keyboardType='email-address'
              color='white'
              placeholder='Name'
              placeholderTextColor='#828282'
              value={name}
              onChangeText={(text) => {
                setName(text);
                setNameError('');
              }}
            />
          </View>

          {nameError && <Text style={mystyles.errorText}>{nameError}</Text>}

          <View style={mystyles.input}>
            <TextInput
              color='white'
              placeholder='Email'
              keyboardType='email-address'
              placeholderTextColor='#828282'
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError('');
              }}
            />
          </View>

          {emailError && <Text style={mystyles.errorText}>{emailError}</Text>}

          <View style={mystyles.input}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                color='white'
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#828282'
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError('');
                }}
              />
              <Image style={{ marginTop: 5 }} source={require('../../../assets/images/iceye.png')} />
            </View>
          </View>
          {passwordError && <Text style={mystyles.errorText}>{passwordError}</Text>}

          <View style={mystyles.input}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                color='white'
                placeholder='Re-type password'
                secureTextEntry={true}
                placeholderTextColor='#828282'
                value={retypePassword}
                onChangeText={(text) => {
                  setRetypePassword(text);
                  setRetypePasswordError('');
                }}
              />
              <Image style={{ marginTop: 5 }} source={require('../../../assets/images/iceye.png')} />
            </View>
          </View>

          {retypePasswordError && <Text style={mystyles.errorText}>{retypePasswordError}</Text>}

          <View style={mystyles.btnRegister}>
            <TouchableOpacity style={{ width: '100%' }} onPress={onPressRegister}>
              <Text style={mystyles.touchLabel}>Register</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ paddingTop: 15 }}>
            <TouchableOpacity>
              <Text style={{ color: '#828282', fontWeight: 'bold' }}>You have an account? Click</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={{ color: '#D17842', fontWeight: 'bold' }}> Sign in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const mystyles = StyleSheet.create({
  btnRegister: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D17842',
    padding: 10,
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
    position: 'relative',
    padding: 15,
    width: '100%',
    height: 55,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
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
  errorText: {
    color: '#FB7181', fontWeight: 'bold', fontSize: 13
  },
  container: {
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '100%',
    padding: 30,
    alignItems: 'center'
  },

  containerKeyboard: {
    flex: 1,
    backgroundColor: '#0c0f14',
  }
});

export default Register;
