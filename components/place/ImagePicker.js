import { View, Text, StyleSheet, Alert, Image } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

import IconButton from "../ui/IconButton";
import Preview from "../ui/Preview";
import { useState } from "react";

function ImagePicker({ onPickImage }) {
  const [image, setImage] = useState();
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app.",
      );
      return false;
    }

    return true;
  }

  async function handleTakeImage() {
    const granted = await verifyPermission();

    if (!granted) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (image.canceled) {
      return;
    }

    const imageUri = image.assets[0].uri;
    setImage(imageUri);
    onPickImage(imageUri);
  }

  let imagePreview = <Text>No Image Taken</Text>;

  if (image) {
    imagePreview = <Image source={{ uri: image }} style={styles.image} />;
  }

  return (
    <View style={styles.imagePicker}>
      <Preview>{imagePreview}</Preview>
      <IconButton
        label="Take Image"
        icon="camera-outline"
        onPress={handleTakeImage}
      />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePicker: {
    gap: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
