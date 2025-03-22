// styles.js  
import { Platform, StyleSheet, StatusBar } from "react-native";  

export default StyleSheet.create({    
  container: {  
    flex: 1, 
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "space-around", 
    backgroundColor: "ghostwhite", 
    ...Platform.select({  
      ios: { paddingTop: 20 }, 
      android: { paddingTop: StatusBar.currentHeight }, 
    }),  
  },  

  box: {  
    width: 300, 
    height: 100, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "lightgray", 
    borderStyle: "dashed",  
    borderColor: "gray",
  },  

  boxText: {  
    color: "darkslategray", 
    fontWeight: "bold", 
  },  
});  