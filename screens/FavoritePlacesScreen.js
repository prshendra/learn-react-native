import { StyleSheet, View } from "react-native";
import PlaceList from "../components/place/PlaceList";

function FavoritePlacesScreen() {
  return <View style={styles.screen}><PlaceList /></View>;
}

export default FavoritePlacesScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  }
})
