import React from "react";  
import { View, Text } from "react-native"; 
import style from "./style";

// Componente Box que recebe children como prop  
export default function Box({ children }) {  
  return (  
    <View style={style.box}>  
      <Text style={style.boxText}>{children}</Text>  
    </View>  
  );  
}  