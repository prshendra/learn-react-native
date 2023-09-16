import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/meals/MealItem";

function FavoritesScreen() {
  const favoritesContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesContext.ids.includes(meal.id)
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
