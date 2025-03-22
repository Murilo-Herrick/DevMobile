import React from "react";  
import { Text, View } from 'react-native';  
import style from "./style";
export default function App() {  
  return (  
    <View style={style.container}>
      <View style={style.box}> 
        <Text style={style.boxText}>Isto é uma caixa</Text> 
      </View>  
    </View>  
  );  
}  
