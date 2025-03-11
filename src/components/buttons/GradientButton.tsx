import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, GRADIENT_COLORS } from "../../theme/colors";

interface GradientButtonProps {
  title: string;
  onPress: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <LinearGradient
        style={styles.lg}
        colors={GRADIENT_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: "40%",
    borderRadius: 30,
  },
  lg: {
    flex: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
