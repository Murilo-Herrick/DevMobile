import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home( { navigation } ){
    return (
        <View style={styles.container}>
            <Button title='Estoque' style={styles.btn} onPress={() => navigation.navigate('Estoque')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, paddingTop: 60 },
    btn: {
      backgroundColor: '#0275d8',
      padding: 8,
      borderRadius: 6,
      marginLeft: 8,
    },
    btnText: { color: '#fff', fontWeight: 'bold' },
  });