import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  upperContainer: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  upperContainerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.lightCharcoal,
  },
  bottomContainer: {
    flex: 0.75,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textInputRoot: {
    width: "80%",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  registerForgotContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  registerForgotContainerRow: {
    width: "50%",
    alignItems: "center",
  },
  backIconContainer: {
    position: "absolute",
    left: 5,
    top: 15,
  },
});
