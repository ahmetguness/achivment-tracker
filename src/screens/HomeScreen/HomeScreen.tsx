import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";

const HomeScreen = () => {
  const userType = useSelector((state: RootState) => state.user.userType);
  console.log(userType);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
