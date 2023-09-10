import { Pressable } from "react-native";
import Card from "../ui/Card";
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes";
import MealHeader from "./MealHeader";

function MealItem({ meal }) {
  const navigation = useNavigation()

  return (
    <Card>
      <Pressable onPress={() => {
        navigation.navigate(routes.mealDetail, {
          mealId: meal.id
        })
      }} android_ripple={{ color: '#ccc' }}
      >
        <MealHeader meal={meal} />
      </Pressable>
    </Card>
  );
}

export default MealItem;
