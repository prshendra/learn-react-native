import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, } from "react-native";
import MealHeader from "../components/meals/MealHeader";
import IconButton from "../components/ui/IconButton";
import Spacer from "../components/ui/Spacer";
import Subtitle from "../components/ui/Subtitle";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [meal, setMeal] = useState()
  const mealId = route.params.mealId;

  const handleFavorite = () => {
    setIsFavorite((isFavorite) => !isFavorite)
  }

  useEffect(() => {
    const meal = MEALS.find(m => mealId === m.id)
    setMeal(meal);

    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          name={isFavorite ? "favorite" : "favorite-outline"}
          color={isFavorite ? "red" : "black"}
          backgroundColor="white"
          onPress={handleFavorite}
        />
      )
    })
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name={isFavorite ? "favorite" : "favorite-outline"}
          color={isFavorite ? "red" : "black"}
          backgroundColor="white"
          onPress={() => setIsFavorite((isFavorite) => !isFavorite)}
        />
      )
    })
  }, [isFavorite]);

  let content = null;

  if (!meal) {
    content = (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  } else {
    content = (
      <View>
        <MealHeader meal={meal} titleStyle={styles.title} />
        <View style={styles.description}>
          <View style={styles.stepsWrapper}>
            <Subtitle>Ingredients</Subtitle>
            <Spacer height={10} />
            {
              meal.ingredients.map(i => <Text key={i}>- {i}</Text>)
            }
          </View>
          <View>
            <Subtitle>Steps</Subtitle>
            <Spacer height={10} />
            {meal.steps.map(s => <Text key={s}>- {s}</Text>)}
          </View>
        </View>

      </View>
    )
  }

  return (
    <ScrollView>
      <View>
        {content}
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  description: {
    padding: 15,
    gap: 10,
  },
});
