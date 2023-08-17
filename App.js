import { useState } from "react";
import { StyleSheet, View, Modal, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import CourseGoalInput from "./components/CourseGoalInput";
import CourseGoalList from "./components/CourseGoalList";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function addCourseGoal(courseGoal) {
    setCourseGoals((cGoals) => [
      ...cGoals,
      {
        text: courseGoal,
        id: Math.random().toString(),
      },
    ]);
  }

  function handleDeleteGoal(goalId) {
    setCourseGoals((courseGoals) => courseGoals.filter(c => c.id !== goalId))
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.goalControl}>
          <Button
            title="Add Course Goal"
            onPress={() => setIsModalVisible(true)}
          />
        </View>
        <View style={styles.goalList}>
          <CourseGoalList
            courseGoals={courseGoals}
            onDeleteGoal={handleDeleteGoal}
          />
        </View>
        <Modal visible={isModalVisible}
          animationType="slide"
        >
          <CourseGoalInput
            onAddGoal={addCourseGoal}
            closeModal={() => setIsModalVisible(false)}
          />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  goalControl: {
    flex: 1,
    justifyContent: 'center'
  },
  goalList: {
    flex: 6,
  },
});
