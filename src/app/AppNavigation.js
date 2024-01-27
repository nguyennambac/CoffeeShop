import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './main/MainStackNavigation';
import AuthenStackNavigation from './authen/AuthenStackNavigation';
import { AppContext } from './AppContext';

const AppNavigation = () => {
    const { isLogin } = useContext(AppContext);
    console.log('isLogin', isLogin);
    return (
        <NavigationContainer>
            {
                isLogin ? <MainStackNavigation /> :
                    <AuthenStackNavigation />
            }
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})