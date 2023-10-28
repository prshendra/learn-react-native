import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/styles';

function IconButton({ icon, label, color, size, onPress, style }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color="white" size={16} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    fontSize: 14,
    color: "white",
  }
});
