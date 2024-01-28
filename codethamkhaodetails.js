import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import AxiosInstance from '../../helpers/AxiosInstance'
import { AppContext } from '../../AppContext'

const Detail = (props) => {
  const { cart, setCart } = useContext(AppContext);
  const { _id } = props?.route?.params;
  // lấy thông tin sản phẩm theo id
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      if (!_id) return;
      try {
        const response = await AxiosInstance().get(`/products/${_id}`);
        setProduct(response.product);
      } catch (error) {
        console.log('Get product error: ', error.message || error);
      }
    }
    getProduct();
  }, [_id]);

  const addToCart = async () => {
    const itemCart = {
      product_id: product._id,
      product_name: product.name,
      product_image: product.image,
      product_quantity: 1,
      product_price: 123
    }
    // tìm index của sản phẩm trong giỏ hàng
    const findIndex = cart.findIndex(item => item.product_id.toString() == itemCart.product_id.toString());
    // nếu ko tìm thấy thì thêm mới
    if (findIndex === -1) {
      setCart([...cart, itemCart]);
    } else {
      // nếu tìm thấy thì cập nhật số lượng
      const newCart = [...cart];
      newCart[findIndex].product_quantity += 1;
      setCart(newCart);
    }
  }

  return (
    <View>
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>{product.description}</Text>
      {product.image && <Image style={{ width: 200, height: 200 }}
        source={{ uri: product.image }} />
      }
       <Text style={styles.text}>{product.price}</Text>
      <Button onPress={addToCart} title="Add to cart" />
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
})