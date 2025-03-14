import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectionScreen from "../screens/SelectionScreen/SelectionScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

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
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
