import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function PlaceItem({ place, style }) {
  const navigation = useNavigation();

  function handleSeeDetail() {
    navigation.navigate("PlaceDetail", { placeId: place.id });
  }

  return (
    <Pressable
      style={({ pressed }) => [style, pressed && styles.pressed]}
      onPress={handleSeeDetail}
    >
      <View style={styles.placeItem}>
        <View>
          <Image source={{ uri: place.imageUri }} width={120} height={120} />
        </View>
        <View style={styles.caption}>
          <Text style={styles.title}>{place.title}</Text>
          <Text style={styles.address}>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {
    flexDirection: "row",
    // backgroundColor: 'white',
    overflow: "hidden",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  address: {},
  caption: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  pressed: {
    opacity: 0.7,
  },
});
