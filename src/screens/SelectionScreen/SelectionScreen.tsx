import React, { useState } from "react";
import {
  Button,
  FlatList,
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
import { selectionOptions } from "../../data/data";
import { createUser } from "../../services/firebase/firebaseServices";

const SelectionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigation<GeneralNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const themeMode = useSelector((state: RootState) => state.app.darkMode)
    ? "dark"
    : "light";

  const handleUserSelection = (userType: string) => {
    setSelectedUserType(userType);
    setConfirmationModal(true); // Onay modalını aç
  };

  const confirmSelection = async () => {
    if (!selectedUserType) return;

    if (selectedUserType === "existingUser") {
      setModalVisible(true);
    } else {
      const result = await createUser(selectedUserType);
      if (result.success) {
        dispatch(setUserType(selectedUserType));
        navigation.navigate("HomeScreen");
      } else {
        console.error(`User creation failed: ${result.error}`);
      }
    }
    setConfirmationModal(false);
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

      {selectionOptions.map(({ label, userType, description, icon }) => (
        <SelectionCard
          key={userType}
          label={label}
          icon={icon}
          description={description}
          onPress={() => handleUserSelection(userType)}
        />
      ))}

      {/* Kullanıcı Tipi Onay Modali */}
      <Modal visible={confirmationModal} animationType="slide" transparent>
        <View style={styles.modalRoot}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Are you sure you want to continue?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={confirmSelection}
                style={styles.confirmButton}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setConfirmationModal(false)}
                style={styles.cancelButton}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Mevcut Kullanıcı Modali */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalRoot}>
          <View style={styles.modalContent}>
            <TouchableOpacity>
              <Text>Click here to scan QR</Text>
            </TouchableOpacity>
            <Text>OR</Text>
            <View>
              <Text>Enter your ID here</Text>
              <TextInput
                style={styles.inputField}
                value={inputValue}
                onChangeText={setInputValue}
              />
              <TouchableOpacity
                onPress={() => console.log("Submitted ID:", inputValue)}
              >
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
