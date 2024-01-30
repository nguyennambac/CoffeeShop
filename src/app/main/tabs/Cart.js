import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ToastAndroid, } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const { cart, setCart } = useContext(AppContext);

  const payMent = () => {
    if (total <= 0) {
      ToastAndroid.show('Cart non item!', ToastAndroid.SHORT);
      return;
    }
    navigation.navigate('Payment');
  }

  const renderItemCart = ({ item }) => {
    const { product_id, product_name, product_image, product_quantity, product_price } = item;
    const handleQuantityChange = (type = 1) => {
      // type = 1: tăng số lượng
      // type = -1: giảm số lượng
      const quantity = product_quantity + type;
      // cập nhật lại số lượng
      // tìm vị trí của sản phẩm trong giỏ hàng
      const index = cart.findIndex(item => item.product_id.toString() == product_id.toString());

      if (quantity <= 0) {

      }
      // cập nhật lại số lượng
      cart[index].product_quantity = quantity;
      // cập nhật lại giỏ hàng
      setCart([...cart]);
    }
    return (
      <View style={{ flexDirection: 'row', marginTop: 16, width: '100%', height: 154, backgroundColor: '#262B33', borderRadius: 23, padding: 10 }}>
        <View>
          <Image
            style={{ width: 135, height: 135, borderRadius: 23 }}
            source={{ uri: `${item.product_image}` }} />
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text numberOfLines={1} style={{ width: '60%', color: 'white', fontSize: 15, fontWeight: '400' }}>{item.product_name}</Text>
          <Text style={{ color: '#AEAEAE', fontSize: 9 }}>Content</Text>
          <Text style={{
            fontSize: 20,
            marginTop: 16,
            marginBottom: 15,
            fontWeight: 'bold',
            color: 'white'
          }}>
            <Text style={{
              color: '#D17842',
            }}>$</Text> {item.product_price}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => handleQuantityChange(-1)}
              style={{ width: 30, height: 30, backgroundColor: '#D17842', alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ paddingVertical: 3, fontSize: 18, color: 'white' }}>-</Text>
            </TouchableOpacity>

            <Text style={{ width: 50, height: 30, borderColor: '#D17842', borderWidth: 1, borderRadius: 5, textAlign: 'center', marginHorizontal: 15, paddingVertical: 5, color: 'white' }}>{item.product_quantity}</Text>

            <TouchableOpacity
              onPress={() => handleQuantityChange(1)}
              style={{ width: 30, height: 30, backgroundColor: '#D17842', alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ paddingVertical: 3, fontSize: 18, color: 'white' }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  // tính tổng tiền
  const total = cart.reduce((total, item) => {
    return total + item.product_quantity * item.product_price;
  }, 0);

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
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Cart</Text>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('PersonalDetails') }}>
            <Image
              style={{ width: 30, height: 30, borderRadius: 10 }}
              source={require('../../../../assets/images/person.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={{ marginTop: 10 }}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={cart}
        renderItem={renderItemCart}
        keyExtractor={item => item.product_id}
      />

      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <View>
            <Text style={{
              color: '#AEAEAE',
              fontSize: 12,
              fontWeight: 500
            }}>Total Price</Text>
          </View>

          <View>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 600
            }}>
              <Text style={{
                color: '#D17842',
              }}>
                $ </Text>
              {total}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={payMent}
            style={{ width: 200, height: 60, backgroundColor: '#D17842', borderRadius: 20 }}>
            <Text style={{
              paddingVertical: 20,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 600,
              color: 'white'
            }}>
              Pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '100%',
    padding: 30,
  }
})