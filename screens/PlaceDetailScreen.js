import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import IconButton from "../components/ui/IconButton";
import { getPlaceById } from "../util/database";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function PlaceDetailScreen({ navigation, route }) {
  const [place, setPlace] = useState();
  const [loading, setLoading] = useState(true);
  const placeId = route.params?.placeId;

  function handleViewOnMap() {
    navigation.navigate("Map", { location: place.location });
  }

  useEffect(() => {
    if (placeId) {
      (async () => {
        const place = await getPlaceById(placeId);
        setPlace(place);
        setLoading(false);
      })();
    }
  }, [placeId]);

  if (loading) {
    return (
      <View style={styles.screen}>
        <LoadingOverlay />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Image
        style={{ width: "100%", height: 250 }}
        source={{
          uri: place.imageUri,
        }}
      />
      <View style={styles.details}>
        <Text style={styles.address}>{place.address}</Text>
        <IconButton label="View on Map" icon="map" onPress={handleViewOnMap} />
      </View>
    </View>
  );
}

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  address: {
    fontWeight: "bold",
    fontSize: 14,
  },
  details: {
    padding: 15,
    alignItems: "center",
    gap: 10,
  },
});
