import { NavigationProp } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";

export type RootStackParamList = {
  SelectionScreen: undefined;
  HomeScreen: undefined;
};

export type GeneralNavigationProp = NavigationProp<RootStackParamList>;
