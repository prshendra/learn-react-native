import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Preview from "../ui/Preview";
import IconButton from "../ui/IconButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

function LocationPicker({ onPickLocation }) {
  const [location, setLocation] = useState();
  const navigation = useNavigation();
  const [locationPermission, requestLocationPermission] =
    useForegroundPermissions();
  const route = useRoute();
  /**
  {
    latitude: number,
    longitude: number
  }
  */
  const pickedLocation = route.params?.location;

  useEffect(() => {
    setLocation(pickedLocation);
    onPickLocation(pickedLocation);
  }, [pickedLocation]);

  async function verifyPermissions() {
    if (locationPermission.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestLocationPermission();

      return permissionResponse.granted;
    }

    if (locationPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app.",
      );
      return false;
    }

    return true;
  }

  function handlePickOnMap() {
    navigation.navigate("Map");
  }

  async function handleLocateUser() {
    const granted = await verifyPermissions();

    if (!granted) {
      return;
    }

    const location = await getCurrentPositionAsync();

    const currentLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(currentLocation);
    onPickLocation(currentLocation);
  }

  let locationPreview = <Text>No Location Picked</Text>;

  if (location) {
    locationPreview = (
      <Text>{`latitude: ${location.latitude}, longitude: ${location.longitude}`}</Text>
    );
  }

  return (
    <>
      <Preview>{locationPreview}</Preview>
      <View style={styles.locationButtons}>
        <IconButton
          label="Auto Detect"
          icon="location-outline"
          style={styles.locationButton}
          onPress={handleLocateUser}
        />
        <IconButton
          label="Pick on Map"
          icon="map-outline"
          style={styles.locationButton}
          onPress={handlePickOnMap}
        />
      </View>
    </>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  locationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  locationButton: {
    paddingHorizontal: 20,
  },
});
