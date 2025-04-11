import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Estoque( { navigation } ){
    return (
        <View>
            <Text>TESTE DE TELA</Text>
            <TextInput placeholder='Digite algo...'></TextInput>
            <Button title='Home' onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}