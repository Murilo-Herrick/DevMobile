import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
      ios: { paddingTop: 2 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },

  box: {
    width: 100,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
  },

  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});
