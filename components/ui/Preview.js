import { View, StyleSheet } from "react-native";

function Preview({ children, style }) {
  return (
    <View style={[styles.preview, style]}>{children}</View>
  )
}

export default Preview;

const styles = StyleSheet.create({
  preview: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
