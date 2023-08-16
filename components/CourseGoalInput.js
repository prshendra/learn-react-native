import { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

function CourseGoalInput({ onPress }) {
  const [courseGoal, setCourseGoal] = useState("");

  function handleAddGoal() {
    onPress(courseGoal);
    setCourseGoal("");
  }

  return (
    <View style={styles.courseInput}>
      <TextInput
        style={{ flex: 4 }}
        placeholder="What's your course goal?"
        onChangeText={setCourseGoal}
        value={courseGoal}
      />
      <View style={{ flex: 1 }}>
        <Button title="Add" onPress={handleAddGoal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  courseInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center'
  },
});

export default CourseGoalInput;
