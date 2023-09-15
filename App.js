import 'react-native-gesture-handler';
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import routes from "./routes";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="categories" component={CategoriesScreen} options={{ title: 'All Categories' }} />
      <Drawer.Screen name="favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="drawer" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen
            name={routes.mealsOverview}
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name={routes.mealDetail}
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
