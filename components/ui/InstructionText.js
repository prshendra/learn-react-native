import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children }) {
  return <Text style={styles.text}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accent500,
  }
})
