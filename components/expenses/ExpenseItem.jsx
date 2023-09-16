import { View, Text, StyleSheet } from "react-native";

function ExpenseItem({expense}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{expense.title}</Text>
        <Text style={styles.createdAt}>{expense.createdAt.toString()}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{expense.amount}</Text>
      </View>
    </View>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal:15,
        borderRadius: 6,
    },
    titleContainer: {

    },
    amountContainer: {
        backgroundColor:"white",
        width: 80,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:5
    },
    title: {
        fontWeight: 'bold',
        fontSize:20,
        color: 'white'
    },
    createdAt: {
        color: 'white'
    },
    amount:{
        fontWeight: 'bold',
        fontSize: 18,
    },
});