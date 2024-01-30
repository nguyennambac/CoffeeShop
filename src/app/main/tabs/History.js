import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext} from '../../AppContext'

const History = () => {
  const {cartHistory} = useContext(AppContext);
  console.log(cartHistory);
  return (
    <View>
      <Text>Cart History</Text>
      <Text style={{ fontSize: 18, color: 'black' }}>{cartHistory?.created_at}</Text>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})