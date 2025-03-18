import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  navbarContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    marginVertical: "2%",
    alignItems: "center",
  },
  backIconContainer: {},
  appIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  inputContainer: {
    width: "80%",
    marginHorizontal: "10%",
    borderBottomWidth: 1,
  },
  inputLabelText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
