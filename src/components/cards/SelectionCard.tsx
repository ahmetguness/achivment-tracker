import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";

interface SelectionCardProps {
  label: string;
  description: string[];
  onPress: () => void;
  icon?: string;
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
          {label} {icon}
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        {description.map((desc, index) => (
          <Text
            key={index}
            style={[styles.descriptionText, { color: COLORS[themeMode].text }]}
          >
            - {desc}
          </Text>
        ))}
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
    borderWidth: 0.1,
    padding: 10,
    justifyContent: "space-evenly",
  },
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionContainer: {
    width: "90%",
    marginHorizontal: "5%",
    alignItems: "flex-start",
  },
  descriptionText: {
    fontSize: 14,
  },
});
