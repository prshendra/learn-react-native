import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import FavoritePlacesScreen from "./screens/FavoritePlacesScreen";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import PlaceDetailScreen from "./screens/PlaceDetailScreen";
import MapScreen from "./screens/MapScreen";
import AppLoading from "expo-app-loading";
import { init } from "./util/database";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FavoritePlaces"
          component={FavoritePlacesScreen}
          options={({ navigation }) => ({
            headerRight: ({ tintColor }) => (
              <Ionicons.Button
                iconStyle={{ marginRight: 0 }}
                backgroundColor="white"
                name="add"
                size={24}
                color={tintColor}
                onPress={() => {
                  navigation.navigate("AddPlace");
                }}
              />
            ),
          })}
        />
        <Stack.Screen name="AddPlace" component={AddPlaceScreen} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}
