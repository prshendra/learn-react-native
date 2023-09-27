import { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ExpensesContext } from "../store/context/expenses-context";
import ExpenseForm from "../components/expenses/ExpenseForm";

/**
 * Screen for managing an Expense or adding new Expense
 */
function ManageExpenseScreen({ navigation, route }) {
  const expensesCtx = useContext(ExpensesContext);
  const [expense, setExpense] = useState(null);
  const id = route.params?.id;

  const handleDeleteExpense = () => {
    expensesCtx.deleteExpense(id);
    navigation.goBack();
  };

  const handleConfirm = (expense) => {
    console.log('e', expense)
    // if id is true, screen is in edit-mode. Otherwise, screen is in add-mode
    if (id) {
      expensesCtx.updateExpense({
        id: id,
        ...expense,
      });
    } else {
      expensesCtx.addExpense(expense);
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
