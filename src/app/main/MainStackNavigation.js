import React, { useContext } from 'react'
import { Image, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext } from '../AppContext';

const MainStacks = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();

// tabs
import Home from './tabs/Home';
import Cart from './tabs/Cart';
import History from './tabs/History';
import Favorite from './tabs/Favorite';

// stacks
import Detail from './stacks/Detail';
import Payment from './stacks/Payment';
import Personal from './stacks/Personal';
import Settings from './stacks/Settings';
import Login from '../authen/Login';
import Register from '../authen/Register';

const renderTabLabel = ({ route, focused }) => {
    if (!focused) {
        return null;
    }

    return <Text style={{ color: '#D17842', fontSize: 12 }}>{route.name}</Text>;
};

const renderTabIcon = ({ route, focused }) => {
    let iconSource;

    if (route.name === 'Home') {
        iconSource = focused
            ? require('../../../../ExpoAppTest/assets/images/homefocus.png')
            : require('../../../../ExpoAppTest/assets/images/home.png');
    } else if (route.name === 'Cart') {
        iconSource = focused
            ? require('../../../../ExpoAppTest/assets/images/cartfocus.png')
            : require('../../../../ExpoAppTest/assets/images/cart.png');
    } else if (route.name === 'History') {
        iconSource = focused
            ? require('../../../../ExpoAppTest/assets/images/notificationfocus.png')
            : require('../../../../ExpoAppTest/assets/images/notification.png');
    } else if (route.name === 'Favorite') {
        iconSource = focused
            ? require('../../../../ExpoAppTest/assets/images/heartfocus.png')
            : require('../../../../ExpoAppTest/assets/images/heart.png');
    }

    return <Image source={iconSource} />;
};

const MainTabsNavigation = () => {
    const { cart } = useContext(AppContext);
    var cartQuantity = 0;

    for (let index = 0; index < cart.length; index++) {
        cartQuantity += 1;
    }

    console.log(cartQuantity);
    return (
        <MainTabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabel: ({ focused }) => renderTabLabel({ route, focused }),
                tabBarIcon: ({ focused }) => renderTabIcon({ route, focused }),
                tabBarStyle: { backgroundColor: '#0c0f14' },
                tabBarItemStyle: { paddingVertical: 5 },
                tabBarShowLabel: false, // Tắt hiển thị label
            })}
        >
            <MainTabs.Screen name="Home" component={Home} />
            <MainTabs.Screen options={{ tabBarBadge: cartQuantity }} name="Cart" component={Cart} />
            <MainTabs.Screen name="Favorite" component={Favorite} />
            <MainTabs.Screen name="History" component={History} />
        </MainTabs.Navigator>
    )
}

const MainStackNavigation = () => {
    return (
        <MainStacks.Navigator screenOptions={{ headerShown: false }}>
            <MainStacks.Screen name="MainTabs" component={MainTabsNavigation} />
            <MainStacks.Screen name="CoffeeDetails" component={Detail} />
            <MainStacks.Screen name="Payment" component={Payment} />
            <MainStacks.Screen name="Login" component={Login} />
            <MainStacks.Screen name="Register" component={Register} />
            <MainStacks.Screen name="PersonalDetails" component={Personal} />
            <MainStacks.Screen name="Settings" component={Settings} />
        </MainStacks.Navigator>
    )
}

export default MainStackNavigation