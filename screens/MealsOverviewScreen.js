import { View, StyleSheet, ScrollView } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useEffect, useState } from "react";
import MealItem from "../components/meals/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const catId = route.params.categoryId;

    const category = CATEGORIES.find(c => c.id === catId)
    const categorizedMeals = MEALS.filter((m) => m.categoryIds.includes(catId));

    setMeals(categorizedMeals);
    navigation.setOptions({
      title: category.title
    })

  }, []);

  return (
    <ScrollView>
      <View style={styles.screen}>
        {meals.map((m) => (
          <MealItem key={m.id} meal={m} />
        ))}
      </View>
    </ScrollView>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    gap: 20,
  },
});
