import { Platform, StyleSheet} from "react-native"; 

export default StyleSheet.create({  
  container: {  
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",  
    backgroundColor: "ghostwhite",
    ...Platform.select({  
      ios: { paddingTop: 20 },
    }),  
  },  
  box: {  
    width: 100, 
    height: 100, 
    justifyContent: "center", 
    alignItems: "center",   
    backgroundColor: "lightgray", 
  },  
  
  boxText: {  
    color: "darkslategrey", 
    fontWeight: "bold",
  },  
});  