import React, { useState, useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, GRADIENT_COLORS } from "../../theme/colors";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { InputCardProps } from "../../models/component_props/InputCardProps";
import GradientButton from "../../components/buttons/GradientButton";
import { AUTH_SCREEN_TITLES } from "../../data/data";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputCard: React.FC<InputCardProps> = ({
  title,
  isPassword = false,
  value,
  setValue,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  return (
    <View style={styles.textInputRoot}>
      <Text>{title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ flex: 1 }}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={setValue}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
            <Entypo
              name={secureTextEntry ? "eye" : "eye-with-line"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const LoginScreen = () => {
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");

  const ResetForm = () => {
    setEmail("");
    setPassword("");
    setPassword2("");
    setName("");
  };

  const getRandomIndex = () => Math.floor(Math.random() * 4);

  const upperText = useMemo(() => {
    const randomIndex = getRandomIndex();
    return isRegisterPage
      ? AUTH_SCREEN_TITLES.Register[randomIndex]
      : AUTH_SCREEN_TITLES.Login[randomIndex];
  }, [isRegisterPage]);

  return (
    <LinearGradient
      style={styles.root}
      colors={GRADIENT_COLORS}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.upperContainer}>
        {isRegisterPage ? (
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => {
              setIsRegisterPage(false);
              ResetForm();
            }}
          >
            <Ionicons
              name="chevron-back"
              size={30}
              color={COLORS.lightCharcoal}
            />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.upperContainerText}>{upperText}</Text>
      </View>
      <View style={styles.bottomContainer}>
        {isRegisterPage ? (
          <>
            <InputCard title="Name" value={name} setValue={setName} />
            <InputCard title="E-Mail" value={email} setValue={setEmail} />
            <InputCard
              title="Password"
              isPassword
              value={password}
              setValue={setPassword}
            />
            <InputCard
              title="Password2"
              isPassword
              value={password2}
              setValue={setPassword2}
            />
            <GradientButton
              title="Register"
              onPress={() => console.log("Register")}
            />
          </>
        ) : (
          <>
            <InputCard title="E-Mail" value={email} setValue={setEmail} />
            <InputCard
              title="Password"
              isPassword
              value={password}
              setValue={setPassword}
            />

            <GradientButton
              title="Log In"
              onPress={() => console.log("Log In")}
            />
            <View style={styles.registerForgotContainer}>
              <View style={styles.registerForgotContainerRow}>
                <Text>Forgot Your Password</Text>
              </View>
              <View style={styles.registerForgotContainerRow}>
                <TouchableOpacity
                  onPress={() => {
                    setIsRegisterPage(true), ResetForm();
                  }}
                >
                  <Text>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
