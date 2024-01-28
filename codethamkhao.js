import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosInstance from '../../helpers/AxiosInstance'

const Home = (props) => {
  const { navigation } = props
  // danh sách danh mục
  const [categories, setCategories] = useState([]);

  // danh mục được chọn (id của danh mục)
  const [selectedCategory, setSelectedCategory] = useState(null);
  // danh sách sản phẩm thuộc danh mục
  const [products, setProducts] = useState([]);

  // lấy danh sách danh mục từ api
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await AxiosInstance()
          .get('/categories');
        setCategories(response.categories);
        // cho danh mục đầu tiên được chọn
        setSelectedCategory(response.categories[0]._id);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);
  // hiển thị danh sách danh mục
  const renderItemCategory = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item._id)}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  // lấy danh sách sản phẩm theo danh mục
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!selectedCategory) {
          return;
        }
        const response = await AxiosInstance()
          .get(`/products?category=${selectedCategory}`);
        setProducts(response.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [selectedCategory]);
  // hiển thị danh sách sản phẩm
  const renderItemProduct = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {
        _id: item._id
      })}
    >
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text numberOfLines={1} style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.price}</Text>
    </TouchableOpacity>
  );


  return (
    <View>
      <Text>Home</Text>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={renderItemCategory}
        keyExtractor={item => item._id}
      />
      <FlatList
        data={products}
        renderItem={renderItemProduct}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'red',
    margin: 10,
    // borderBottomWidth: 2,
    // borderBottomColor: 'black',
    padding: 10,
  }
})