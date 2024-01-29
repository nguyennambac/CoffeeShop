import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext';
import AxiosInstance from '../../helpers/AxiosInstance';

const CoffeeDetails = (props) => {
  const { cart, setCart } = useContext(AppContext);
  const { _id } = props?.route?.params;

  const navigation = useNavigation();

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
      product_price: product.price
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
    console.log(cart);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            style={{ width: '100%', height: 510, position: 'relative' }}
            source={{ uri: `${product.image}` }}
          />

          <View style={{ position: 'absolute', flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 20, marginTop: 30 }}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image
                source={require("../../../../assets/images/icback.png")}
                style={{ justifyContent: 'flex-start', marginLeft: 5 }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require("../../../../assets/images/btnLove.png")}
                style={{ justifyContent: 'flex-start', marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>

          <Image
            style={{ position: 'absolute', bottom: 0, width: '100%' }}
            source={require('../../../../assets/images/backgrounditemdetails.png')} />

          <Text numberOfLines={1} style={{
            color: 'white', fontSize: 20, fontWeight: 600, position: 'absolute', top: 392, left: 22, width: '50%'
          }}>{product.name}</Text>

          <Text numberOfLines={2} style={{
            color: '#AEAEAE', fontSize: 12, fontWeight: 400, position: 'absolute', top: 414, left: 22, marginTop: 5, width: '50%'
          }}>{product.description}</Text>

          <View style={{ position: 'absolute', top: 460, left: 22, flexDirection: 'row' }}>
            <Image
              style={{ marginRight: 6 }}
              source={require('../../../../assets/images/stardetails.png')}
            />

            <Text style={{ color: 'white', fontWeight: 600, fontSize: 16, marginRight: 6 }}>
              {product.rating}
            </Text>

            <Text style={{ color: '#AEAEAE', fontWeight: 400, fontSize: 10, marginTop: 5 }}>
              ({product.voting})
            </Text>
          </View>

          <View style={{ position: 'absolute', flexDirection: 'row', right: 20, top: 380 }}>
            <View>
              <Text style={{ width: 56, height: 56, backgroundColor: '#141921', borderRadius: 10, marginRight: 20, position: 'relative' }}>

              </Text>
              <Image
                style={{ position: 'absolute', top: 6, left: 12 }}
                source={require('../../../../assets/images/iccoffee.png')}
              />

              <Text style={{
                color: '#AEAEAE',
                fontSize: 10,
                fontWeight: 500,
                position: 'absolute',
                top: 35, left: 12
              }}>
                Coffee
              </Text>
            </View>

            <View>
              <Text style={{ width: 56, height: 56, backgroundColor: '#141921', borderRadius: 10, position: 'relative' }}>

              </Text>
              <Image
                style={{ position: 'absolute', top: 6, left: 15 }}
                source={require('../../../../assets/images/icmilk.png')}
              />

              <Text style={{
                color: '#AEAEAE',
                fontSize: 10,
                fontWeight: 500,
                position: 'absolute',
                top: 35, left: 20
              }}>
                Milk
              </Text>
            </View>
          </View>

          <View style={{ position: 'absolute', right: 20, top: 450 }}>
            <Text style={{
              paddingVertical: 14,
              textAlign: 'center',
              width: 132,
              height: 45,
              backgroundColor: '#141921',
              borderRadius: 10,
            }}>
              <Text style={{
                color: '#AEAEAE',
                fontSize: 10,
                fontWeight: 500,
              }}>
                Medium Roasted
              </Text>
            </Text>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <View>
            <Text style={{
              color: '#AEAEAE',
              fontSize: 14,
              fontWeight: 600
            }}>Description</Text>

            <Text style={{
              marginTop: 10,
              color: 'white',
              fontSize: 12,
              fontWeight: 400
            }}>{product.description}</Text>
          </View>

          <View style={{ marginTop: 200, marginBottom: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <View>
                <Text style={{
                  marginLeft: 16,
                  color: '#AEAEAE',
                  fontSize: 12,
                  fontWeight: 500
                }}>Price</Text>
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
                  {product.price}</Text>
              </View>
            </View>

            <View>
              <TouchableOpacity onPress={addToCart} style={{ width: 240, height: 60, backgroundColor: '#D17842', borderRadius: 20 }}>
                <Text style={{
                  paddingVertical: 20,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'white'
                }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0f14',
    flex: 1
  }
})

export default CoffeeDetails;