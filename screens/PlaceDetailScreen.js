import { View, Text, StyleSheet, Image } from "react-native";
import Preview from "../components/ui/Preview";
import IconButton from "../components/ui/IconButton";

function PlaceDetailScreen({ navigation }) {

  function handleViewOnMap() {
    navigation.navigate("Map")
  }

  return (
    <View style={styles.screen}>
      <Image
        style={{ width: '100%', height: 250 }}
        source={{ uri: 'https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=ais' }}
      />
      <Text style={styles.address}>Jl. Sesetan No 600, Denpasar Selatan</Text>
      <IconButton label="View on Map" icon="map" onPress={handleViewOnMap} />
    </View>
  )
}

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    gap: 10,
  },
  address: {
    fontWeight: 'bold',
    fontSize: 14,
  }
});
