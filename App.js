import { useState } from "react";
import { useFonts } from "expo-font";
import { ImageBackground, SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import AppLoading from "expo-app-loading";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import routes from "./routes";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <StatusBar /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.mealsCategories}
            component={CategoriesScreen}
          />
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
