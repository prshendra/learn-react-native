import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/meals/MealItem";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  let content;

  if (favoriteMeals.length === 0) {
    content = <Text>No favorites meals</Text>;
  } else {
    content = favoriteMeals.map((m) => <MealItem key={m.id} meal={m} />);
  }

  return <View style={styles.screen}>{content}</View>;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    gap: 15,
  },
});
