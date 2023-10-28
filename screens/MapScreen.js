import { useEffect, useState, useCallback } from "react";
import { StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

function MapScreen({ navigation }) {
  const initialRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [location, setLocation] = useState({
    latitude: initialRegion.latitude,
    longitude: initialRegion.longitude,
  });

  const handleSaveLocation = useCallback(() => {
    if (!location) {
      Alert.alert("No location picked!", "You have to pick location first!");
      return;
    }

    navigation.navigate("AddPlace", { location: location });
  }, [navigation, location]);

  useEffect(() => {
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
  }, [navigation, handleSaveLocation]);

  function handleSelectLocation(event) {
    setLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      onPress={handleSelectLocation}
    >
      <Marker
        coordinate={location}
        title={"Hendra"}
        description={"Ini rumah hendra"}
      />
    </MapView>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
