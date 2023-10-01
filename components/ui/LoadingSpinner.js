import { View, ActivityIndicator, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function LoadingSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary500} />
    </View>
  )
}

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: "white",
  },
});
