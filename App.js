import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Routes from "./routes";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpenseScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={Routes.Recent}
          component={RecentExpensesScreen}
          options={{
            headerRight: ({}) => (
              <Ionicons.Button
                name="add"
                backgroundColor={"white"}
                color={"black"}
                size={22}
                onPress={() => console.log("Open Add Expense page")}
              />
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="timer-outline" color={color} size={size} />
            ),
            tabBarLabel: "Recent",
            title: "Recent Expenses",
          }}
        />
        <Tab.Screen
          name={Routes.AllExpenses}
          component={AllExpensesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" color={color} size={size} />
            ),
            tabBarLabel: "All Expenses",
            title: "All Expenses",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
