import { StyleSheet, View, Text, Pressable } from "react-native";

function CourseGoalItem({ data, onDeleteItem }) {

  function handleItemClick() {
    onDeleteItem(data.id)
  }

  return (
    <View style={styles.courseWrapper}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={handleItemClick}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.courseText}>{data.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  courseWrapper: {
    borderRadius: 6,
    marginBottom: 8,
    backgroundColor: "#5e0acc",
  },
  courseText: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: "white",
  },
  pressed: {
    opacity: 0.5
  }
});

export default CourseGoalItem;
