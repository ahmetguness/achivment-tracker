import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectionScreen from "../screens/SelectionScreen/SelectionScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import InformationScreen from "../screens/InformationScreen/InformationScreen";

const AppStackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="InformationScreen" component={InformationScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
