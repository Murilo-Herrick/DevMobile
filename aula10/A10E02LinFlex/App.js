// App.js  
import React from "react";  
import { View } from "react-native";  
import style from "./style"; // Importa os estilos definidos em styles.js  
import Box from "./box"; // Importa o componente Box  

// Componente principal App  
export default function App() {  
  return (  
    // View principal que serve como container, aplicando os estilos definidos em styles.container  
    <View style={style.container}>  
      {/* Utiliza o componente Box e passa o texto "1" como children */}  
      <Box>1</Box>  
      {/* Utiliza o componente Box e passa o texto "2" como children */}  
      <Box>2</Box>  
    </View>  
  );  
}  