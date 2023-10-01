import { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ExpensesContext } from "../store/context/expenses-context";
import ExpenseForm from "../components/expenses/ExpenseForm";
import { createExpense, updateExpense, deleteExpense } from "../util/http";
import LoadingSpinner from "../components/ui/LoadingSpinner";

/**
 * Screen for managing an Expense or adding new Expense
 */
function ManageExpenseScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false)
  const expensesCtx = useContext(ExpensesContext);
  const [expense, setExpense] = useState(null);
  const id = route.params?.id;

  const handleDeleteExpense = async () => {
    setIsLoading(true)
    await deleteExpense(id)
    expensesCtx.deleteExpense(id);
    navigation.goBack();
  };

  const handleConfirm = async (expense) => {
    setIsLoading(true)
    console.log('e', expense)
    // remove id to the request body, so it's not clutter the firebase
    const expenseId = expense.id
    delete expense.id

    // if id is true, screen is in edit-mode. Otherwise, screen is in add-mode
    if (id) {
      await updateExpense(expenseId, expense)
      expensesCtx.updateExpense({
        id: id,
        ...expense,
      });
    } else {
      const expenseId = await createExpense(expense).then()
      expensesCtx.addExpense({ ...expense, id: expenseId });
    }

    // go back after edit/add action
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const expense = expensesCtx.expenses.find((e) => e.id === id);
    setExpense(expense);

    navigation.setOptions({
      title: id ? "Manage Expense" : "Add Expense",
    });
  }, [navigation, id]);

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <View style={styles.screen}>
      <ExpenseForm expense={expense} onConfirm={handleConfirm} onCancel={handleCancel} />
      {id && (
        <View style={styles.deleteButtonContainer}>
          <Ionicons.Button
            name="trash"
            iconStyle={{ marginRight: 0 }}
            style={{ backgroundColor: 'red' }}
            onPress={handleDeleteExpense}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    gap: 10,
    alignItems: "center",
  },
  deleteButtonContainer: {
    flexDirection: "row",
  },
});
