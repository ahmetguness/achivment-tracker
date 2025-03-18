import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { styles } from "./styles";
import QRCode from "react-native-qrcode-svg";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

const ChildHomeScreen = () => {
  const qrRef = useRef(null);

  const saveQrToGallery = async () => {
    Alert.alert("Confirm", "Are you sure you want to save this QR code?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: async () => {
          try {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== "granted") {
              Alert.alert(
                "Permission Required",
                "Please allow media access to save QR code."
              );
              return;
            }

            const uri = await captureRef(qrRef, {
              format: "png",
              quality: 1,
            });

            await MediaLibrary.saveToLibraryAsync(uri);
            Alert.alert("Success", "QR code saved to gallery!");
          } catch (error) {
            Alert.alert("Error", "Could not save QR code.");
            console.error(error);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.root}>
      <View style={{ flexDirection: "row", marginTop: "4%" }}>
        <View
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>ID:</Text>
          <Text>12jkb412hg4v1g24</Text>
        </View>
        <TouchableOpacity
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={saveQrToGallery}
        >
          <View ref={qrRef} collapsable={false}>
            <QRCode value="test" size={160} />
          </View>
          <Text>Click here to save QR code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChildHomeScreen;
