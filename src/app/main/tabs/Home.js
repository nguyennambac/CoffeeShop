import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AxiosInstance from '../../helpers/AxiosInstance'

const Home = (props) => {
    const [datacate, setDatacate] = useState([]);
    const navigation = useNavigation();

    // lấy danh sách danh mục, chạy 1 lần duy nhất
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await AxiosInstance().get('/categories');
                // console.log('Get categories successfully: ', response);
                setDatacate(response.categories);
                // chọn danh mục đầu tiên làm mặc định
                setSelectedCategory(response.categories[0]._id);
            } catch (error) {
                console.log('Get categories error: ', error.message || error);
            }
        }
        getCategories();
    }, []);

    const renderCate = ({ item }) => {
        return (
            <View key={item._id}>
                <Text onPress={() => setSelectedCategory(item._id)}
                    style={{ color: '#52555A', fontSize: 14, fontWeight: 600, marginRight: 19, marginBottom: 36 }}>
                    {item.name}</Text>
            </View>
        )
    }

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [data, setData] = useState([]);

    // lấy danh sách sản phẩm theo danh mục dc chọn
    useEffect(() => {
        const getProducts = async () => {
            // nếu chưa chọn danh mục thì ko làm gì cả
            if (!selectedCategory) return;
            try {
                const response = await AxiosInstance().get(`/products?category=${selectedCategory}`);
                console.log('Get products successfully: ', response);
                setData(response.products);
            } catch (error) {
                console.log('Get products error: ', error.message || error);
            }
        }
        getProducts();
    }, [selectedCategory]);

    const renderItem = ({ item }) => {
        const handleCoffeeDetails = () => {
            navigation.navigate('CoffeeDetails', { _id: item._id });
        }

        return (
            <TouchableOpacity key={item._id} onPress={handleCoffeeDetails}>
                <View key={item._id}>
                    <View style={styles.containerItem}>
                        <View style={{ position: 'relative' }}>
                            <View>
                                <Image
                                    style={{ borderRadius: 20, marginBottom: 10, width: 126, height: 126 }}
                                    source={{ uri: `${item.image}` }} />
                            </View>

                            <Image
                                style={{ position: 'absolute', right: 0, borderTopRightRadius: 20 }}
                                source={require('../../../../assets/images/sale.png')} />
                            <Image
                                style={{ position: 'absolute', right: 31, top: 5 }}
                                source={require('../../../../assets/images/star.png')} />
                            <Text style={{ position: 'absolute', top: 2, right: 5, color: 'white', fontWeight: 'bold', fontSize: 11, right: 11 }}>
                                {item.rating.toFixed(1)}
                            </Text>
                        </View>
                        <Text numberOfLines={1} style={{
                            display: 'flex',
                            width: 92,
                            height: 23,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: 'white',
                            fontSize: 13,
                            fontWeight: 400,
                        }}>{item.name}</Text>
                        <Text numberOfLines={2} style={{
                            display: 'flex',
                            width: 92,
                            height: 23,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: 'white',
                            fontSize: 9,
                            fontWeight: 400,
                        }}>{item.description}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                marginTop: 6,
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                <Text style={{
                                    color: '#D17842',
                                }}>$</Text> {item.price.toFixed(2)}
                            </Text>
                            <TouchableOpacity style={{ width: 29, height: 29, borderRadius: 10, backgroundColor: '#D17842' }}>
                                <Text style={{ color: 'white', textAlign: 'center', padding: 4, fontWeight: 'bold', fontSize: 15 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
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
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('PersonalDetails') }}>
                        <Image
                            style={{ width: 30, height: 30, borderRadius: 10 }}
                            source={require('../../../../assets/images/person.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 31, marginBottom: 28 }}>
                <Text style={{ color: 'white', fontSize: 28, fontWeight: 600, }}>Find the best</Text>
                <Text style={{ color: 'white', fontSize: 28, fontWeight: 600, }}>coffee for you</Text>
            </View>

            <View style={{ marginBottom: 28 }}>
                <TextInput
                    style={[styles.input, { position: 'relative' }]}
                    placeholder='Find Your Coffee...'
                    placeholderTextColor='#52555A'
                />
                <Image
                    style={{ position: 'absolute', right: 18, top: 13, }}
                    source={require('../../../../assets/images/search.png')} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View>
                        <Text style={{ color: '#D17842', fontSize: 14, fontWeight: 600, marginRight: 19, marginBottom: 6, position: 'relative' }}>All</Text>
                        <Text style={{ backgroundColor: '#D17842', width: 8, height: 8, borderRadius: 7, position: 'absolute', bottom: 22, left: 5 }}></Text>
                    </View>

                    <View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={datacate}
                            renderItem={renderCate}
                            keyExtractor={cate => cate._id}
                        />
                    </View>
                </View>

                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                    />
                </View>

                <View>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 500, marginBottom: 19, marginTop: 23 }}>Coffee beans</Text>
                </View>

                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    input: {
        padding: 15,
        width: '100%',
        height: 55,
        borderRadius: 15,
        borderColor: 'gray',
        color: '#828282',
        backgroundColor: '#252A32'
    },

    containerItem: {
        marginRight: 22,
        padding: 20,
        fontSize: 18,
        flexShrink: 0,
        borderRadius: 23,
        backgroundColor: '#252A32'
    },

    container: {
        backgroundColor: '#0c0f14',
        width: '100%',
        height: '100%',
        padding: 30,
    }
})