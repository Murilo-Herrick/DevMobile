// Componente que representa um contador  
// O componente Countdown usa o Hook useState para gerenciar o estado do contador,  
// e o Hook useEffect para definir um intervalo que decrementa o contador a cada segundo.  

import React, { useState, useEffect } from 'react';  
import { View, Text, Button } from 'react-native';  

// Componente principal Countdown  
export default function Countdown() {  
  // Estado inicial do contador  
  const [count, setCount] = useState(10);  

  // Hook que altera o estado do contador  
  useEffect(() => {  
    // Caso o contador chegue a zero, limpa o intervalo  
    if (count === 0) return;  

    // Define um intervalo que decrementa o contador  
    const interval = setInterval(() => {  
      setCount(prevCount => prevCount - 1);  
    }, 1000);  

    // Limpa o intervalo ao desmontar o componente ou ao alterar o contador  
    return () => clearInterval(interval);  
  }, [count]);  

  return (  
    <View>  
      <Text>{count}</Text>  
      <Button title="Reiniciar" onPress={() => setCount(10)} />  
    </View>  
  );  
}  