import { FlatList } from "react-native";

import CourseGoalItem from "./CourseGoalItem";

function CourseGoalList({ courseGoals }) {
  return (
    <FlatList
      data={courseGoals}
      renderItem={(itemData) => <CourseGoalItem data={itemData.item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CourseGoalList;
