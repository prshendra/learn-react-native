import { TextInput, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/styles";

function FormControl({ label, value, onChangeText }) {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default FormControl;

const styles = StyleSheet.create({
  formControl: {
    gap: 4,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.primary600,
  },
});
