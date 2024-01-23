import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CoffeeDetails = ({ route }) => {
  // Trích xuất thông tin item từ tham số của đường dẫn (route)
  const { item } = route.params;

  // Bây giờ bạn có thể sử dụng đối tượng item trong component của bạn
  const { id, rate, name_product, content_product, price, image_product } = item;

  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: '100%', height: 510, position: 'relative' }}
          source={require('../../../../assets/images/imagedemodetails.png')}
        />

        <View style={{ position: 'absolute', flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 20, marginTop: 30 }}>
          <TouchableOpacity onPress={handleHome}>
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

        <Text style={{
          color: 'white', fontSize: 20, fontWeight: 600, position: 'absolute', top: 392, left: 22
        }}>{name_product}</Text>

        <Text style={{
          color: '#AEAEAE', fontSize: 12, fontWeight: 400, position: 'absolute', top: 414, left: 22, marginTop: 5
        }}>{content_product}</Text>

        <View style={{ position: 'absolute', top: 460, left: 22, flexDirection: 'row' }}>
          <Image
            style={{ marginRight: 6 }}
            source={require('../../../../assets/images/stardetails.png')}
          />

          <Text style={{ color: 'white', fontWeight: 600, fontSize: 16, marginRight: 6 }}>
            {rate}
          </Text>

          <Text style={{ color: '#AEAEAE', fontWeight: 400, fontSize: 10, marginTop: 5 }}>
            (6,879)
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
          }}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
        </View>

        <View>
          <Text style={{
            marginTop: 27,
            color: '#AEAEAE',
            fontSize: 14,
            fontWeight: 600
          }}>Size</Text>
        </View>

        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ borderRadius: 10, width: 100, height: 40, backgroundColor: '#141921', borderColor: '#D17842', borderWidth: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: '#D17842', fontWeight: 500 }}>S</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ borderRadius: 10, width: 100, height: 40, backgroundColor: '#141921' }}>
            <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: '#AEAEAE', fontWeight: 500 }}>M</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ borderRadius: 10, width: 100, height: 40, backgroundColor: '#141921' }}>
            <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: '#AEAEAE', fontWeight: 500 }}>L</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 37, flexDirection: 'row', justifyContent: 'space-between' }}>
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
                {price}</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity style={{ width: 240, height: 60, backgroundColor: '#D17842', borderRadius: 20 }}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '100%'
  }
})

export default CoffeeDetails;