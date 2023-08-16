import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import CourseGoalInput from "./components/CourseGoalInput";
import CourseGoalList from "./components/CourseGoalList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([{ text: "asu", id: "xxx" }]);

  function addCourseGoal(courseGoal) {
    setCourseGoals((cGoals) => [
      ...cGoals,
      {
        text: courseGoal,
        id: Math.random().toString(),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.goalControl}>
        <CourseGoalInput onPress={addCourseGoal} />
      </View>
      <View style={styles.goalList}>
        <CourseGoalList courseGoals={courseGoals} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  goalControl: {
    flex: 1,
  },
  goalList: {
    flex: 6,
  },
});
