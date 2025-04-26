import { FlatList, StyleSheet, Text, View } from 'react-native';
import styles from "./styles";

const nomes = ["Murilo", "Herrick", "Paulo", "Carlos"]


const data = new Array(100)
  .fill(null)
  .map((v, i) => ({ key: i.toString(), value: `Nome: ${nomes[Math.floor(Math.random() * nomes.length)]}` }))

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}/>
    </View>
  );
}