import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);

  const renderItemCart = ({item}) => {
    return(
      <View>
        <Text>{item.product_name}</Text>
      </View>
    )
  }
  return (
    <View>
      <FlatList
      showsVerticalScrollIndicator={false}
      horizontal={false}
      data={cart}
      renderItem={renderItemCart}
      keyExtractor={item => item.product_id}
      />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

})