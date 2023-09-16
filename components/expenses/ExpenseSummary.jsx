import { View, Text, StyleSheet } from "react-native";

function ExpenseSummary() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Last 7 days</Text>
      <Text style={styles.total}>$67.00</Text>
    </View>
  );
}

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: '#bfc0fc',
    paddingVertical: 6,
    paddingHorizontal:10,
    alignItems: 'center',
    borderRadius:6,
  },
  label: {
    color: '#2d2388'
  },
  total: {
    fontWeight: 'bold',
    fontSize:20,
    color: '#1e1479'
  },
});