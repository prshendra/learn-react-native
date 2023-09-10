import { View, Text, StyleSheet, Pressable } from "react-native";

function CategoryItem({ title, color, onPress }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        style={styles.pressable}
        onPress={onPress}
        android_ripple={{ color: "rgba(255, 255, 255, 0.5)" }}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 10,
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  pressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
