import "react-native-get-random-values";
import { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ExpenseItem from "../components/expenses/ExpenseItem";
import ExpenseSummary from "../components/expenses/ExpenseSummary";
import { ExpensesContext } from "../store/context/expenses-context";

function getLast7DaysExpenses(expenses) {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  return expenses.filter(e => e.createdAt >= sevenDaysAgo)
}

function RecentExpensesScreen() {
  const expenseCtx = useContext(ExpensesContext);
  const recentExpenses = getLast7DaysExpenses(expenseCtx.expenses)
  const totalRecentExpenses = recentExpenses.reduce((acc, current) => acc + current.amount, 0)

  return (
    <View style={styles.screen}>
      <ExpenseSummary label={"Last 7 days"} total={totalRecentExpenses} />
      <ScrollView>
        <View style={styles.expensesContainer}>
          {recentExpenses.map((e) => (
            <ExpenseItem key={e.id} expense={e} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    gap: 10,
    marginBottom: 40,
  },
  expensesContainer: {
    gap: 10,
  },
});
