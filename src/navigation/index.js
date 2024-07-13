import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import AppNavigator from './AppNavigator';
import { Startup } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors, Constants } from '../common';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={Constants.Screen.Startup} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Constants.Screen.Startup} component={Startup} />
                <Stack.Screen name={Constants.Screen.App} component={AppNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator;                   