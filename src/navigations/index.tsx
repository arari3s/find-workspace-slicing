import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Booking from '../screens/Booking';

const Stack = createNativeStackNavigator();

function Navigations(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'Details'} component={Details} />
                <Stack.Screen name={'Booking'} component={Booking} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigations;
