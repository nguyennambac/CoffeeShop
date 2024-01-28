import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();

  const handlePersonalDetails = () => {
    navigation.navigate('PersonalDetails');
  }

  const handleHome = () => {
    navigation.navigate('Home');
  }

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure want to logout!',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: handleLogin
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={handleHome}>
          <Image
            source={require("../../../../assets/images/icback.png")}
            style={{ justifyContent: 'flex-start', marginLeft: 5 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 35 }}>Setting</Text>
      </View>
      <View style={styles.list}>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={{ backgroundColor: '#33241d', width: 35, height: 35, borderRadius: 20, position: 'relative' }}>
              <Image
                source={require("../../../../assets/images/history.png")}
                style={styles.itemIcon}
              />
            </View>
            <Text style={styles.itemTitle}>History</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Image
                source={require("../../../../assets/images/right.png")}
                style={{ margin: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePersonalDetails}>
          <View style={styles.item}>
            <View style={{ backgroundColor: '#33241d', width: 35, height: 35, borderRadius: 20, position: 'relative' }}>
              <Image
                source={require("../../../../assets/images/personnal.png")}
                style={styles.itemIcon}
              />
            </View>
            <Text style={styles.itemTitle}>Personal Details</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Image
                source={require("../../../../assets/images/right.png")}
                style={{ margin: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={{ backgroundColor: '#33241d', width: 35, height: 35, borderRadius: 20, position: 'relative' }}>
              <Image
                source={require("../../../../assets/images/address.png")}
                style={styles.itemIcon}
              />
            </View>
            <Text style={styles.itemTitle}>Address</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Image
                source={require("../../../../assets/images/right.png")}
                style={{ margin: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={{ backgroundColor: '#33241d', width: 35, height: 35, borderRadius: 20, position: 'relative' }}>
              <Image
                source={require("../../../../assets/images/payment.png")}
                style={styles.itemIcon}
              />
            </View>
            <Text style={styles.itemTitle}>Payment Method</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Image
                source={require("../../../../assets/images/right.png")}
                style={{ margin: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={{ backgroundColor: '#33241d', width: 35, height: 35, borderRadius: 20, position: 'relative' }}>
              <Image
                source={require("../../../../assets/images/about.png")}
                style={styles.itemIcon}
              />
            </View>
            <Text style={styles.itemTitle}>About</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Image
                source={require("../../../../assets/images/right.png")}
                style={{ margin: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={{ backgroundColor: '#33241d', width: 35, height: 35, borderRadius: 20, position: 'relative' }}>
              <Image
                source={require("../../../../assets/images/help.png")}
                style={styles.itemIcon}
              />
            </View>
            <Text style={styles.itemTitle}>Help</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Image
                source={require("../../../../assets/images/right.png")}
                style={{ margin: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.item}>
            <View style={{ backgroundColor: '#33241d', width: 35, height: 35, borderRadius: 20, position: 'relative' }}>
              <Image
                source={require("../../../../assets/images/logout.png")}
                style={styles.itemIcon}
              />
            </View>
            <Text style={styles.itemTitle}>Log out</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Image
                source={require("../../../../assets/images/right.png")}
                style={{ margin: 10 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Setting

const styles = StyleSheet.create({
  container: {
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
  list: {
    flexDirection: "column",
  },
  item: {
    margin: 10,
    flexDirection: 'row',
    height: 50,
    borderRadius: 5,
  },
  itemIcon: {
    position: 'absolute',
    width: 25,
    height: 25,
    margin: 5
  },
  itemTitle: {
    marginTop: 6,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: 'white'
  },
});