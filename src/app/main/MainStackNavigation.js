import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const MainTabsNavigation = () => {
    return (
        <MainTabs.Navigator screenOptions={{ headerShown: false }}>
            <MainTabs.Screen name="Home" component={Home} />
            <MainTabs.Screen name="Cart" component={Cart} />
            <MainTabs.Screen name="History" component={History} />
            <MainTabs.Screen name="Favorite" component={Favorite} />
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
            <MainStacks.Screen name="PersonalDetails" component={Personal} />
            <MainStacks.Screen name="Settings" component={Settings} />
        </MainStacks.Navigator>
    )
}

export default MainStackNavigation