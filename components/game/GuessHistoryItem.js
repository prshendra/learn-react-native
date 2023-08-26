import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessHistoryItem({ children }) {
  return <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
}

export default GuessHistoryItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: Colors.accent500,
    borderWidth: 2,
    marginVertical: 3,
    width: '100%'
  },
  text: {
    color: 'black'
  }
});
