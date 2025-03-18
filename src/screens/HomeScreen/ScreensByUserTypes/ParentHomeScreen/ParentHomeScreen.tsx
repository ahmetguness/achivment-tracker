import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const ParentHomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text>asdasdasdasd</Text>
        </View>
        <View style={{ width: "50%", alignItems: "center" }}>
          <Text>ID:</Text>
          <Text>2318762874165274517624</Text>
        </View>
      </View>
    </View>
  );
};

export default ParentHomeScreen;
