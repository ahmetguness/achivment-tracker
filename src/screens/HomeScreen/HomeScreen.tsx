import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";
import { styles } from "./styles";
import ChildHomeScreen from "./ScreensByUserTypes/ChildHomeScreen/ChildHomeScreen";
import GuestHomeScreen from "./ScreensByUserTypes/GuestHomeScreen/GuestHomeScreen";
import ParentHomeScreen from "./ScreensByUserTypes/ParentHomeScreen/ParentHomeScreen";

const HomeScreen = () => {
  const userType = useSelector((state: RootState) => state.user.userType);
  console.log(userType);

  const renderScreen = () => {
    switch (userType) {
      case "parent":
        return <ParentHomeScreen />;
      case "child":
        return <ChildHomeScreen />;
      case "guest":
        return <GuestHomeScreen />;
      default:
        return <Text>User type not recognized</Text>;
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.navbarContainer}>
        <Text>NAVBAR</Text>
      </View>
      {renderScreen()}
    </View>
  );
};

export default HomeScreen;
