import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./componentes/styles.js"
import Box from "./componentes/box.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
    </View>
  );
}
