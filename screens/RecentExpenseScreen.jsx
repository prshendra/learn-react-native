import "react-native-get-random-values";
import { View, StyleSheet, ScrollView } from "react-native";
import ExpenseItem from "../components/expenses/ExpenseItem";
import ExpenseSummary from "../components/expenses/ExpenseSummary";
import { useContext } from "react";
import { ExpensesContext } from "../store/context/expenses-context";

function getLast7DaysTotal(expenses) {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  return expenses.filter(e => e.createdAt >= sevenDaysAgo)
    .reduce((acc, current) => acc + current.amount, 0)
}

function RecentExpensesScreen() {
  const expenseCtx = useContext(ExpensesContext);

  return (
    <View style={styles.screen}>
      <ExpenseSummary label={"Last 7 days"} total={getLast7DaysTotal(expenseCtx.expenses)} />
      <ScrollView>
        <View style={styles.expensesContainer}>
          {expenseCtx.expenses.map((e) => (
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
  },
  expensesContainer: {
    gap: 10,
  }
});
