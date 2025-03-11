import { ImageBackground, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/NavigationTypes/NavigationTypes";

const IntroScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.root}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("LoginScreen")}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={require("../../assets/background/temp.jpg")}
      >
        <Text style={{ color: "white" }}>GO NEXT PAGE</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default IntroScreen;
