import React from "react";
import { Text, View } from 'react-native';
import styles from "./componentes/styles.js";

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.boxText}>#1</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>#2</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>#3</Text>
        </View>
    </View>
  );
}