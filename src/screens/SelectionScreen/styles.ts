import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  modalRoot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "75%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    alignItems: "center",
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  appIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  inputField: {
    borderBottomWidth: 1,
    width: "80%",
    textAlign: "center",
    paddingVertical: 5,
    marginVertical: 10,
  },
});