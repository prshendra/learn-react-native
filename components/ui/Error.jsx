import { View, Text, StyleSheet } from "react-native";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue' }}>{message}</Text>
    </View>
  )
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: "white",
  },
});
