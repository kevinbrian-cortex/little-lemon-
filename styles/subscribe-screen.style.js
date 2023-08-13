import { StyleSheet } from "react-native";

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    columnGap: 10,
    padding : 10
  },

  mainContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  mainText: {
    fontSize: 19,
    fontWeight: "normal",
    textAlign: "center",
  },

  InputForm: {
    borderWidth: 2,
    width: "100%",
    padding: 10,
    borderColor: "#3e524b",
    marginVertical: 20,
    borderRadius : 10
  },
});

export default styles;
