import { StyleSheet, View, Text } from "react-native";

function CourseGoalItem({ data }) {
  return (
    <View style={styles.courseWrapper}>
      <Text style={styles.courseText}>{data.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  courseWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 8,
    backgroundColor: "blue",
  },
  courseText: {
    color: "white",
  },
});

export default CourseGoalItem;
