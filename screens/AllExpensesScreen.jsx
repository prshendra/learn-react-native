import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ExpensesContext } from "../store/context/expenses-context";
import ExpenseItem from "../components/expenses/ExpenseItem";

function AllExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext)

  return (
    <View style={styles.screen}>
      <FlatList
        data={expensesCtx.expenses}
        renderItem={({ item }) => (
          <View style={styles.expenseItemContainer}>
            <ExpenseItem expense={item} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default AllExpensesScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
  },
  expenseItemContainer: {
    marginTop: 10,
  }
});
