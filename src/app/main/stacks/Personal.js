import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext';
import AxiosInstance from '../../helpers/AxiosInstance';

const PersonalDetails = () => {
  const navigation = useNavigation();

  const { nameInfo, setNameInfo } = useContext(AppContext);
  const { emailInfo, setEmailInfo } = useContext(AppContext);
  const { passwordInfo, setPasswordInfo } = useContext(AppContext);

  const onPressUpdate = async () => {
    console.log('onPressUpdate');
    const infoUpdate = {
      email: emailInfo,
      password: passwordInfo,
      name: nameInfo
    }

    try {
      const result = await AxiosInstance().post('/users/update-profile', infoUpdate);
      console.log(result);
      if (result.status == true) {
        ToastAndroid.show('Profile updated successfully', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Update failed:', error);
      ToastAndroid.show('Failed to update profile', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image
            source={require("../../../../assets/images/icback.png")}
            style={{ justifyContent: 'flex-start' }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 35 }}>Setting</Text>
      </View>
      <Image
        style={{ marginTop: 30, marginBottom: 60 }}
        source={require('../../../../assets/images/person.png')} />

      <View style={styles.input}>
        <TextInput
          color='white'
          placeholder='Name'
          placeholderTextColor='#828282'
          value={nameInfo}
          onChangeText={text => setNameInfo(text)} />
      </View>
      <View style={styles.input}>
        <TextInput
          color='white'
          placeholder='Email'
          value={emailInfo}
          keyboardType='email-address'
          placeholderTextColor='#828282'
          onChangeText={text => setEmailInfo(text)} />
      </View>

      <View style={styles.input}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            color='white'
            value={passwordInfo}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={text => setPasswordInfo(text)}
            placeholderTextColor='#828282' />
          <Image
            style={{ marginTop: 5 }}
            source={require('../../../../assets/images/iceye.png')} />
        </View>
      </View>
      <View style={styles.input}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            color='white'
            value={passwordInfo}
            placeholder='Re-type password'
            secureTextEntry={true}
            placeholderTextColor='#828282' />
          <Image
            style={{ marginTop: 5 }}
            source={require('../../../../assets/images/iceye.png')} />
        </View>
      </View>
      <View style={styles.btnSave}>
        <TouchableOpacity onPress={onPressUpdate}
          style={{ width: '100%' }}
        >
          <Text style={styles.touchLabel}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PersonalDetails
const styles = StyleSheet.create({
  touchLabel: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
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

  btnSave: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D17842',
    padding: 10,
    borderRadius: 25,
    height: 65,
    width: '100%'
  },
  container: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#0c0f14',
  },

  title: {
    paddingTop: 50,
    marginLeft: 10,
    marginBottom: 25,
    flexDirection: 'row',
  },
})
