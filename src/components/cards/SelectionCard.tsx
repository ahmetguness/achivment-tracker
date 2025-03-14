import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";

interface SelectionCardProps {
  label: string;
  description: string;
  onPress: () => void;
  icon?: React.ReactNode;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  label,
  description,
  onPress,
  icon,
}) => {
  const themeMode = useSelector((state: RootState) =>
    state.app.darkMode ? "dark" : "light"
  );

  return (
    <TouchableOpacity
      style={[styles.root, { backgroundColor: COLORS[themeMode].card }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.labelContainer}>
        <Text style={[styles.labelText, { color: COLORS[themeMode].text }]}>
          {label}
        </Text>
      </View>
      {icon}
      <View style={styles.descriptionContainer}>
        <Text
          style={[styles.descriptionText, { color: COLORS[themeMode].text }]}
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectionCard;

const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    marginHorizontal: "10%",
    height: "18%",
  },
  labelContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: "2%",
  },
  labelText: {
    color: COLORS.light.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionContainer: {
    width: "90%",
    marginHorizontal: "5%",
  },
  descriptionText: {
    fontSize: 14,
  },
});
