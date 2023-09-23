import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/ui/Button";
import { Ionicons } from "@expo/vector-icons";
import { ExpensesContext } from "../store/context/expenses-context";

/**
 * Screen for managing an Expense or adding new Expense
 */
function ManageExpenseScreen({ navigation, route }) {
  const expensesCtx = useContext(ExpensesContext);
  const [expense, setExpense] = useState({});
  const id = route.params?.id;

  const handleDeleteExpense = () => {
    expensesCtx.deleteExpense(id);
    navigation.goBack();
  };

  const handleConfirm = () => {
    if (id) {
      // if id is true, then mode is edit
      expensesCtx.updateExpense({
        ...expense,
        title: "Updated Expense!",
        amount: 200.99,
        createAt: new Date(),
      });
    } else {
      // otherwise, mode is add
      expensesCtx.addExpense({
        title: "New Expense",
        amount: 99.99,
        createdAt: new Date(),
      });
    }
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

  // if id is passed, screen is in "edit" mode.
  // Otherwise, in "add" mode
  if (id) {
    // Edit mode
    return (
      <View style={styles.screen}>
        {/* <Text>{expense?.title}</Text>
        <Text>{expense?.createdAt.toString()}</Text>
        <Text>{expense?.amount}</Text> */}
        <View style={styles.buttonsContainer}>
          <Button mode="flat" onPress={handleCancel}>
            Cancel
          </Button>
          <Button onPress={handleConfirm}>Confirm</Button>
        </View>
        <View style={styles.deleteButtonContainer}>
          <Ionicons.Button
            name="trash"
            iconStyle={{ marginRight: 0 }}
            style={{ backgroundColor: 'red' }}
            onPress={handleDeleteExpense}
          />
        </View>
      </View>
    );
  }

  // Add mode
  return (
    <View>
      <Text>Add expense</Text>
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
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 3,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "center",
  },
  deleteButtonContainer: {
    flexDirection: "row",
  },
});
