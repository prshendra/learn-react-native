import { FlatList, Text } from "react-native";

import CourseGoalItem from "./CourseGoalItem";

function CourseGoalList({ courseGoals, onDeleteGoal }) {

  let content;

  if (courseGoals.length > 0) {
    content = (
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <CourseGoalItem
            data={itemData.item}
            onDeleteItem={onDeleteGoal}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    )
  } else {
    content = (
      <Text style={{ fontStyle: 'italic', color: 'grey' }}>
        No course goal...
      </Text>
    )
  }

  return content;
}

export default CourseGoalList;
