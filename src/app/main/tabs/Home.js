import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [data, setData] = useState(DATA);
    const [datacate, setDatacate] = useState(DATACATE);
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        const { id, rate, name_product, content_product, price, image_product } = item;
        const handleCoffeeDetails = () => {
            navigation.navigate('CoffeeDetails', { item });
        }

        return (
            <TouchableOpacity onPress={handleCoffeeDetails}>
                <View >
                    <View style={styles.containerItem}>
                        <View style={{ position: 'relative' }}>
                            <View>
                                <Image
                                    style={{ borderRadius: 20, marginBottom: 10, width: 126, height: 126 }}
                                    source={image_product} />
                            </View>

                            <Image
                                style={{ position: 'absolute', right: 0, borderTopRightRadius: 20 }}
                                source={require('../../../../assets/images/sale.png')} />
                            <Image
                                style={{ position: 'absolute', right: 31, top: 5 }}
                                source={require('../../../../assets/images/star.png')} />
                            <Text style={{ position: 'absolute', top: 2, right: 5, color: 'white', fontWeight: 'bold', fontSize: 11, right: 11 }}>
                                {rate}
                            </Text>
                        </View>
                        <Text style={{
                            display: 'flex',
                            width: 92,
                            height: 23,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: 'white',
                            fontSize: 13,
                            fontWeight: 400,
                        }}>{name_product}</Text>
                        <Text style={{
                            display: 'flex',
                            width: 92,
                            height: 23,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flexShrink: 0,
                            color: 'white',
                            fontSize: 9,
                            fontWeight: 400,
                        }}>{content_product}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                marginTop: 6,
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                <Text style={{
                                    color: '#D17842',
                                }}>$</Text> {price}
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

    const renderCate = ({ item }) => {
        return (
            <View>
                <Text style={{ color: '#52555A', fontSize: 14, fontWeight: 600, marginRight: 19, marginBottom: 36 }}>{item}</Text>
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
                    <TouchableOpacity>
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
                    <Image
                        style={{ width: 30, height: 30, borderRadius: 10 }}
                        source={require('../../../../assets/images/person.png')} />
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
                            keyExtractor={cate => cate}
                        />
                    </View>
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

var DATA = [{
    "id": 1,
    "rate": 4.5,
    "name_product": "Milk Coffee",
    "content_product": "With Steamed Milk",
    "price": "4.50",
    "image_product": require('../../../../assets/images/product.png')
},
{
    "id": 2,
    "rate": 4.0,
    "name_product": "Coffee",
    "content_product": "With Steamed Milk",
    "price": "4.50",
    "image_product": require('../../../../assets/images/product.png')
},
{
    "id": 3,
    "rate": 3.5,
    "name_product": "Capuchino",
    "content_product": "With Steamed Milk",
    "price": "4.50",
    "image_product": require('../../../../assets/images/product.png')
},
{
    "id": 4,
    "rate": 5.0,
    "name_product": "Latte",
    "content_product": "With Steamed Milk",
    "price": "4.50",
    "image_product": require('../../../../assets/images/product.png')
},
{
    "id": 5,
    "rate": 4.2,
    "name_product": "Americano",
    "content_product": "With Steamed Milk",
    "price": "4.50",
    "image_product": require('../../../../assets/images/product.png')
}
]

var DATACATE = ['Cappuccino', 'Espresso', 'Americano', 'Macchiato'];