import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './src/Screens/HomePage';
import { SelectedCountryPage } from './src/Screens/SelectedCountryPage';

const Stack = createStackNavigator();

export const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home"
            >
            <Stack.Screen
            name="Home"
            component={HomePage }
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="SelectedCountry"
            component={SelectedCountryPage}
            options={{
                headerShown: false
            }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    );

}