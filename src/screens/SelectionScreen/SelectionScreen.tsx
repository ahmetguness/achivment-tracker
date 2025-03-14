import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Entypo from "@expo/vector-icons/Entypo";

import SelectionCard from "../../components/cards/SelectionCard";
import { styles } from "./styles";
import { GeneralNavigationProp } from "../../types/NavigationTypes/NavigationTypes";
import { AppDispatch, RootState } from "../../hooks/redux_toolkit/store";
import { setUserType } from "../../hooks/redux_toolkit/Slices/UserSlice";
import { COLORS } from "../../theme/colors";

const SelectionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<GeneralNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const themeMode = useSelector((state: RootState) => state.app.darkMode)
    ? "dark"
    : "light";

  const handleUserSelection = (userType: string) => {
    dispatch(setUserType(userType));
    navigation.navigate("HomeScreen");
  };

  return (
    <View
      style={[styles.root, { backgroundColor: COLORS[themeMode].background }]}
    >
      <View style={styles.navbarContainer}>
        <Image
          style={styles.appIcon}
          source={require("../../assets/app/app_icon.png")}
        />
        <Text style={[styles.navbarTitle, { color: COLORS[themeMode].text }]}>
          Choose Your Plan
        </Text>
        <TouchableOpacity>
          <Entypo name="menu" size={30} color={COLORS[themeMode].icon} />
        </TouchableOpacity>
      </View>

      {[
        { label: "Parent", userType: "Parent" },
        { label: "Child", userType: "Child" },
        { label: "Guest", userType: "Guest" },
      ].map(({ label, userType }) => (
        <SelectionCard
          key={userType}
          label={label}
          description="Select this option"
          onPress={() => handleUserSelection(userType)}
        />
      ))}

      <SelectionCard
        label="Have already an account"
        description="Sign in using QR or ID"
        onPress={() => setModalVisible(true)}
      />

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalRoot}>
          <View style={styles.modalContent}>
            <TouchableOpacity>
              <Text>Click here to scan QR</Text>
            </TouchableOpacity>
            <Text>OR</Text>
            <View>
              <Text>Enter your ID here</Text>
              <TextInput style={styles.inputField} />
              <TouchableOpacity>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default SelectionScreen;
