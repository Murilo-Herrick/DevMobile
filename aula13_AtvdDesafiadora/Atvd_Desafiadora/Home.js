import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home( { navigation } ){
    return (
        <View>
            <Text>Tela do Home</Text>
            <Button title='Estoque' onPress={() => navigation.navigate('Estoque')}></Button>
        </View>
    )
}