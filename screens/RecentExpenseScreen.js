import "react-native-get-random-values";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ExpenseItem from "../components/expenses/ExpenseItem";
import { v4 as uuidv4 } from "uuid";
import ExpenseSummary from "../components/expenses/ExpenseSummary";

const dummy = [
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
  { id: uuidv4(), title: "A Book", createdAt: new Date(), amount: 20.99 },
];

function RecentExpensesScreen() {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <ExpenseSummary />
        {dummy.map((d) => (
          <ExpenseItem
            key={d.id}
            expense={{ title: "A Book", createdAt: new Date(), amount: 20.99 }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    gap: 10,
  },
});
