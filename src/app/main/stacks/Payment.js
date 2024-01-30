import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'
import AxiosInstance from '../../helpers/AxiosInstance'

const Payment = (props) => {
  const { navigation } = props;
  const { cart, setCart, emailInfo } = useContext(AppContext);

  // tính tổng tiền
  const total = cart.reduce((total, item) => {
    return total + item.product_quantity * item.product_price;
  }, 0);

  const pay = async () => {
    try {
      const body = {
        email: emailInfo,
        carts: cart
      }
      const result = await AxiosInstance().post('/carts', body);
      console.log(result);
      if (result.status == true) {
        setCart([]);
        navigation.navigate('Home');
        ToastAndroid.show('Payment successfully!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View>
      <Text>Payment</Text>
      <Text>{emailInfo}</Text>
      <TouchableOpacity onPress={pay}>
        <Text>Thanh toán giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})