import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import FavoritePlacesScreen from './screens/FavoritePlacesScreen';
import AddPlaceScreen from './screens/AddPlaceScreen';
import PlaceDetailScreen from './screens/PlaceDetailScreen';
import MapScreen from './screens/MapScreen';

const Stack = createNativeStackNavigator();

// function AuthStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: 'white',
//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//     </Stack.Navigator>
//   );
// }

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen
          name="FavoritePlaces"
          component={FavoritePlacesScreen}
          options={({ navigation }) => ({
            headerRight: ({ tintColor }) => (
              <Ionicons.Button
                iconStyle={{ marginRight: 0 }}
                backgroundColor="white"
                name='add' size={24} color={tintColor} onPress={() => {
                  navigation.navigate("AddPlace")
                }} />
            )
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlaceScreen}
        />
        <Stack.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}
