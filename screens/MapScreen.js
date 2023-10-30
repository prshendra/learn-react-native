import { useEffect, useState, useCallback } from "react";
import { StyleSheet, Alert, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useForegroundPermissions } from "expo-location";
import { getCurrentLocation } from "../util/location";

function MapScreen({ navigation, route }) {
  const [locationPermission, requestLocationPermission] =
    useForegroundPermissions();
  const [location, setLocation] = useState();

  const viewedLocation = route.params?.location;

  const handleSaveLocation = useCallback(() => {
    if (!location) {
      Alert.alert("No location picked!", "You have to pick location first!");
      return;
    }

    navigation.navigate("AddPlace", { location: location });
  }, [navigation, location]);

  useEffect(() => {
    // if viewedLocation is truthy, then set it as initial region
    if (viewedLocation) {
      setLocation({
        ...viewedLocation,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      return;
    }

    // otherwise, used device's location as map's initial region
    if (locationPermission) {
      (async () => {
        // get user's current location
        const location = await getCurrentLocation(
          locationPermission,
          requestLocationPermission,
        );
        setLocation({
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      })();
    }
  }, [locationPermission, viewedLocation]);

  useEffect(() => {
    if (!viewedLocation) {
      navigation.setOptions({
        headerRight: () => (
          <Ionicons.Button
            name="save"
            backgroundColor={"white"}
            color={"black"}
            iconStyle={{ marginRight: 0 }}
            size={20}
            onPress={handleSaveLocation}
          />
        ),
      });
    }
  }, [navigation, handleSaveLocation, viewedLocation]);

  function handleSelectLocation(event) {
    if (viewedLocation) {
      // for read only mode, don't allow to move the marker
      return;
    }

    setLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  }

  if (!location) {
    return (
      <View style={styles.fallbackScreen}>
        <LoadingOverlay />
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={location}
      onPress={handleSelectLocation}
    >
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title={"Location"}
      />
    </MapView>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  fallbackScreen: {
    flex: 1,
  },
});
