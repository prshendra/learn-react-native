import { useEffect, useState } from "react";
import { TextInput, View, Button, StyleSheet, Image } from "react-native";

function CourseGoalInput({ onAddGoal, closeModal }) {
  const [courseGoal, setCourseGoal] = useState("");

  useEffect(() => {
    return () => {
      console.log('modal destroyed')
    }
  }, [])

  function handleAddGoal() {
    onAddGoal(courseGoal);
    closeModal()
  }

  return (
    <View style={styles.courseInput}>
      <Image style={styles.image} source={require('../assets/images/goal.png')} />
      <TextInput
        placeholder="What's your course goal?"
        onChangeText={setCourseGoal}
        value={courseGoal}
        style={styles.textInput}
        placeholderTextColor="grey"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAddGoal} />
        <Button title="Cancel" onPress={closeModal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  courseInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#311b6b',
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 5
  },
  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'white',
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
  }
});

export default CourseGoalInput;
