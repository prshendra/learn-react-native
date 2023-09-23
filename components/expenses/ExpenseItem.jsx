import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

function getDateStr(d) {
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const str = `${day}/${month}/${year}`;

  return str;
}

function ExpenseItem({ expense }) {
  const navigation = useNavigation();
  const dateStr = getDateStr(expense.createdAt);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ManageExpense", {
          id: expense.id,
        })
      }
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{expense.title}</Text>
          <Text style={styles.createdAt}>{dateStr}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{expense.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  titleContainer: {},
  amountContainer: {
    backgroundColor: "white",
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  createdAt: {
    color: "white",
  },
  amount: {
    fontWeight: "bold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
