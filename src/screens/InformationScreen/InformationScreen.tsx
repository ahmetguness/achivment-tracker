import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/NavigationTypes/NavigationTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";

interface InputCardProps {
  label: string;
}

const InformationScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();
  const userType = useSelector((state: RootState) => state.user.userType);
  console.log(userType);

  const handleBack = () => {
    navigation.goBack();
  };

  const InputCard: React.FC<InputCardProps> = ({ label }) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelText}>{label}:</Text>
        <TextInput />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.navbarContainer}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => handleBack()}
        >
          <Ionicons name="chevron-back" size={26} color="black" />
        </TouchableOpacity>
        <View>
          <Text>Fill in Your Information</Text>
        </View>
        <Image
          style={styles.appIcon}
          source={require("../../assets/app/app_icon.png")}
        />
      </View>
      <View>
        <InputCard label="Name" />
        <InputCard label="Name" />
        <InputCard label="Name" />
      </View>
    </View>
  );
};

export default InformationScreen;
