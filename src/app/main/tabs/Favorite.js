import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, RefreshControl, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext';

const Favorite = () => {
  const navigation = useNavigation();
  const { productFavorites, setProductFavorites } = useContext(AppContext);
  const [refreshing, setRefreshing] = useState(false);

  const unFavorite = (productId) => {
    // Find the index of the item to be removed
    const itemIndex = productFavorites.findIndex(item => item.product_id === productId);

    if (itemIndex !== -1) {
      // Create a new array without the item to be removed
      const updatedFavorites = [...productFavorites.slice(0, itemIndex), ...productFavorites.slice(itemIndex + 1)];

      // Update the state with the new array
      setProductFavorites(updatedFavorites);
      ToastAndroid.show('Removed from Favorites!', ToastAndroid.SHORT);
    }
  }

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderItem = ({ item }) => {
    const { product_id, product_name, product_image, product_description, product_voting, prodct_rating } = item;
    return (
      <View style={{ marginVertical: 20, backgroundColor: '#252A32', borderRadius: 20 }}>
        <View style={{ borderRadius: 20 }}>
          <Image
            style={{ width: '100%', height: 510, position: 'relative', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            source={{ uri: `${product_image}` }}
          />

          <TouchableOpacity
            onPress={() => unFavorite(product_id)}
            style={{ position: 'absolute', top: 15, right: 15 }}
          >
            <Image
              source={require('../../../../assets/images/btnLove.png')} />
          </TouchableOpacity>

          <Image
            style={{ position: 'absolute', bottom: 0, width: '100%' }}
            source={require('../../../../assets/images/backgrounditemdetails.png')} />

          <Text numberOfLines={1} style={{
            color: 'white', fontSize: 20, fontWeight: 600, position: 'absolute', top: 392, left: 22, width: '50%'
          }}>{product_name}</Text>

          <Text numberOfLines={2} style={{
            color: '#AEAEAE', fontSize: 12, fontWeight: 400, position: 'absolute', top: 414, left: 22, marginTop: 5, width: '50%'
          }}>Content</Text>

          <View style={{ position: 'absolute', top: 460, left: 22, flexDirection: 'row' }}>
            <Image
              style={{ marginRight: 6 }}
              source={require('../../../../assets/images/stardetails.png')}
            />

            <Text style={{ color: 'white', fontWeight: 600, fontSize: 16, marginRight: 6 }}>
              {prodct_rating}
            </Text>

            <Text style={{ color: '#AEAEAE', fontWeight: 400, fontSize: 10, marginTop: 5 }}>
              ({product_voting})
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
            }}>{product_description}</Text>
          </View>
        </View>
      </View>
    )
  }

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
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Favorites</Text>
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
        data={productFavorites}
        renderItem={renderItem}
        keyExtractor={item => item.product_id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '100%',
    padding: 30,
  }
})