import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Constants } from '../common';
import { Home, PlanDetail } from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={Constants.Screen.Home} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Constants.Screen.Home} component={Home} />    
            <Stack.Screen name={Constants.Screen.PlanDetail} component={PlanDetail} />    
        </Stack.Navigator>
    )
}

export default AppNavigator;
