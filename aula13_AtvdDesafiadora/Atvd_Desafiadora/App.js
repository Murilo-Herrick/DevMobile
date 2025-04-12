import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Estoque from './Estoque';
import EditarEstoque from './EditarEstoque';
import Login from './Login';
import RecuperarSenha from './RecuperarSenha';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Estoque" component={Estoque} />
        <Stack.Screen name="EditarEstoque" component={EditarEstoque} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}