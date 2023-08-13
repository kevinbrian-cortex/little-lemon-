import { StyleSheet } from "react-native";

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderColor: "red",
    flex: 1,
  },

  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  footerContent: {
    width: "100%",
    flex: 0.5,
    color: "white",
    padding: 20,
    display: "flex",
    justifyContent: "flex-end",
  },

  mainBtn: {
    backgroundColor: "#3e524b",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 6,
  },

  btnText: {
    color: "#ffff",
  },
});

export default styles;
