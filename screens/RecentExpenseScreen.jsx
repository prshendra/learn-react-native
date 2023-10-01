import "react-native-get-random-values";
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ExpenseItem from "../components/expenses/ExpenseItem";
import ExpenseSummary from "../components/expenses/ExpenseSummary";
import { ExpensesContext } from "../store/context/expenses-context";
import { fetchExpenses } from "../util/http";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorOverlay from "../components/ui/Error";

// Helper function to transform expenses in object form to array form
function transformExpenses(expensesObject) {
  // check if expensesObject is a valid object and contains properties
  if (!expensesObject || Object.keys(expensesObject).length === 0) {
    // object is not valid, return.
    return;
  }

  const expensesArray = []

  for (const [k, v] of Object.entries(expensesObject)) {
    // create expense object
    const expense = {
      id: k,
      title: v.title,
      amount: v.amount,
      createdAt: new Date(v.createdAt)
    }
    expensesArray.push(expense)
  }

  return expensesArray
}

// Helper function to filter last 7 days expenses
function getLast7DaysExpenses(expenses) {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  return expenses.filter(e => e.createdAt >= sevenDaysAgo)
}

function RecentExpensesScreen() {
  const expenseCtx = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(false)
  const recentExpenses = getLast7DaysExpenses(expenseCtx.expenses)
  const totalRecentExpenses = recentExpenses.reduce((acc, current) => acc + current.amount, 0)
  const [error, setError] = useState("")

  useEffect(() => {
    setIsLoading(true)

    fetchExpenses()
      .then((response) => {
        console.log("fetched:", response.data)
        expenseCtx.setExpenses(transformExpenses(response.data).reverse())
      })
      .catch((e) => {
        setError(e.message)
      }).finally(() => {
        setIsLoading(false)
      })
  }, []);

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

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
