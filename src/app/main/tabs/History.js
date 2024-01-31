import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Image, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'
import { useNavigation } from '@react-navigation/native';

const History = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
      }}>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
            <View>
              <Image
                style={{ position: 'relative' }}
                source={require('../../../../assets/images/backgroudlogo.png')} />
              <Image
                style={{ position: 'absolute', top: 7, left: 8 }}
                source={require('../../../../assets/images/logomenu.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Order History</Text>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('PersonalDetails') }}>
            <Image
              style={{ width: 30, height: 30, borderRadius: 10 }}
              source={require('../../../../assets/images/person.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ marginTop: 25 }}
            source={require('../../../../assets/images/history1.png')}
          />

          <Image
            style={{ marginTop: 30 }}
            source={require('../../../../assets/images/history2.png')}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={{ backgroundColor: '#D17842', marginTop: 20, borderRadius: 20 }}>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 124, paddingVertical: 20 }}>Download</Text>
      </TouchableOpacity>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '100%',
    padding: 30,
  }
})