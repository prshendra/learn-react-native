import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Button({ children, mode, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#ccc' }}
      style={[styles.buttonContainer, mode === 'flat' && styles.flat]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    minWidth: 80,
    borderRadius: 5,
  },
  text: {
    // color: 'white'
  },
  flat: {
    backgroundColor: 'transparent',
    borderColor: Colors.primary100,
    borderWidth: 2,
  }
});
