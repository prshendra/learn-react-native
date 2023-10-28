import { View, StyleSheet, Alert } from "react-native";
import FormControl from "../components/ui/FormControl";
import Button from "../components/ui/Button";
import ImagePicker from "../components/place/ImagePicker";
import LocationPicker from "../components/place/LocationPicker";
import { useState } from "react";
import { getLocationAddress } from "../util/location";

function AddPlaceScreen() {
  const [title, setTitle] = useState("");
  const [imageUri, setImageUri] = useState("");
  /*
    location = {latitude: number, longitude: number}
  */
  const [location, setLocation] = useState();

  async function handleSavePlace() {
    // save to SQLite database

    // validate form input
    if (title === "" || imageUri === "" || !location) {
      Alert.alert("Form is invalid!", "Make sure all value is inputted!");
      return;
    }

    const address = await getLocationAddress(
      location.latitude,
      location.longitude,
    );
    Alert.alert("Your Address", address);

    console.log(address);
  }

  return (
    <View style={styles.screen}>
      <FormControl label="Title" value={title} onChangeText={setTitle} />
      <ImagePicker onPickImage={setImageUri} />
      <LocationPicker onPickLocation={setLocation} />
      <Button
        label="Add Place"
        icon="location-outline"
        style={styles.addPlaceButton}
        onPress={handleSavePlace}
      />
    </View>
  );
}

export default AddPlaceScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    gap: 10,
  },
  addPlaceButton: {
    marginTop: 3,
  },
});
