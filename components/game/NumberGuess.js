import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors";

function NumberGuess({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default NumberGuess;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    maxWidth: "80%",
    width: 280
  },
  text: {
    fontSize: 40,
    color: Colors.accent500,
    fontFamily: 'open-sans-bold',
  }
});
