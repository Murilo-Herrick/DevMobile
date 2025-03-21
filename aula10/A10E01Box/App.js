import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import styles from "./componetes/styles.js"

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Isto é uma caixa</Text>
        </View>
    </View>
  );
}