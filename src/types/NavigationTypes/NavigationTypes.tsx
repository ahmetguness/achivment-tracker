import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  IntroScreen: undefined;
  LoginScreen: undefined;
};

export type GeneralNavigationProp = NavigationProp<RootStackParamList>;
