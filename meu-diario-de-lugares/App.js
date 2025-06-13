import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterLocationScreen from './screens/RegisterLocationScreen';
import MapScreen from './screens/MapScreen';
import ListScreen from './screens/ListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registro">
        <Stack.Screen name="Registro" component={RegisterLocationScreen} />
        <Stack.Screen name="Mapa" component={MapScreen} />
        <Stack.Screen name="Lista" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
