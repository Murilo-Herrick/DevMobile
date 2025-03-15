import React from 'react';
import { SafeAreaView } from 'react-native';
import MeuComponente from './componetes/MeuComponente.js';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MeuComponente />
    </SafeAreaView>
  );
}
