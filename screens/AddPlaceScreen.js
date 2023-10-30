import { View, StyleSheet, Alert } from "react-native";
import FormControl from "../components/ui/FormControl";
import Button from "../components/ui/Button";
import ImagePicker from "../components/place/ImagePicker";
import LocationPicker from "../components/place/LocationPicker";
import { useState } from "react";
import { getLocationAddress } from "../util/location";
import { Place } from "../models/Place";
import { insertPlace } from "../util/database";

function AddPlaceScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [imageUri, setImageUri] = useState("");
  /*
    location = {latitude: number, longitude: number}
  */
  const [location, setLocation] = useState();

  async function handleSavePlace() {
    // validate form input
    if (title === "" || imageUri === "" || !location) {
      Alert.alert("Form is invalid!", "Make sure all value is inputted!");
      return;
    }

    const address = await getLocationAddress(
      location.latitude,
      location.longitude,
    );

    const locationWithAddress = { ...location, address: address };
    const place = new Place(title, imageUri, locationWithAddress);
    // save to database
    await insertPlace(place);
    navigation.navigate("FavoritePlaces");
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
