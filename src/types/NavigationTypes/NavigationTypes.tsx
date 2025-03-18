import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  SelectionScreen: undefined;
  HomeScreen: undefined;
  InformationScreen: undefined;
};

export type GeneralNavigationProp = NavigationProp<RootStackParamList>;
