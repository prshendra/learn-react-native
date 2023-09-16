import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MealHeader from "../components/meals/MealHeader";
import IconButton from "../components/ui/IconButton";
import Spacer from "../components/ui/Spacer";
import Subtitle from "../components/ui/Subtitle";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const [meal, setMeal] = useState();
  const mealId = route.params.mealId;
  const isFavoriteMeal = favoriteMealIds.includes(mealId);

  const handleToggleFavorite = () => {
    if (isFavoriteMeal) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useEffect(() => {
    const meal = MEALS.find((m) => mealId === m.id);
    setMeal(meal);

    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          name={isFavoriteMeal ? "favorite" : "favorite-outline"}
          color={isFavoriteMeal ? "red" : "black"}
          backgroundColor="white"
          onPress={handleToggleFavorite}
        />
      ),
    });
  }, [navigation, isFavoriteMeal]);

  let content = null;

  if (!meal) {
    content = (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    content = (
      <View>
        <MealHeader meal={meal} titleStyle={styles.title} />
        <View style={styles.description}>
          <View style={styles.stepsWrapper}>
            <Subtitle>Ingredients</Subtitle>
            <Spacer height={10} />
            {meal.ingredients.map((i) => (
              <Text key={i}>- {i}</Text>
            ))}
          </View>
          <View>
            <Subtitle>Steps</Subtitle>
            <Spacer height={10} />
            {meal.steps.map((s) => (
              <Text key={s}>- {s}</Text>
            ))}
          </View>
        </View>
      </View>
    );
  }

  return (
    <ScrollView>
      <View>{content}</View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  description: {
    padding: 15,
    gap: 10,
  },
});
