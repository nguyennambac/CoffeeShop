import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../../AppContext';

const Cart = (props) => {
    const { navigation } = props;
    // lấy giỏ hàng từ context
    const { cart, setCart } = useContext(AppContext);
    const renderCartItem = ({ item }) => {
        const { product_id, product_name, product_image, product_quantity, product_price } = item;
        const onChangeQuantity = (type = 1) => {
            // type = 1: tăng số lượng
            // type = -1: giảm số lượng
            const quantity = product_quantity + type;
            // cập nhật lại số lượng
            // tìm vị trí của sản phẩm trong giỏ hàng
            const index = cart.findIndex(item => item.product_id.toString() == product_id.toString());
            // cập nhật lại số lượng
            cart[index].product_quantity = quantity;
            // cập nhật lại giỏ hàng
            setCart([...cart]);
        }
        return (
            <View style={styles.item}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: product_image }} />
                <Text style={styles.text}>{product_name}</Text>
                <Text style={styles.text}>{product_price}</Text>
                <Text onPress={() => onChangeQuantity(1)} style={styles.text}>Tăng</Text>
                <Text style={styles.text}>{product_quantity}</Text>
                <Text onPress={() => onChangeQuantity(-1)} style={styles.text}>Giảm</Text>
            </View>
        )
    }

    // tính tổng tiền
    const total = cart.reduce((total, item) => {
        return total + item.product_quantity * item.product_price;
    }, 0);

    return (
        <View>
            <Text style={styles.text}>Tổng tiền: {total}</Text>
            <Text>Cart</Text>
            <FlatList
                data={cart}
                renderItem={renderCartItem}
                keyExtractor={item => item.product_id}
            />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        backgroundColor: '#f2f2'
    },
    text: {
        fontSize: 30,
        color: 'red'
    }
})