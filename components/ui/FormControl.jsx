import { View, Text, TextInput, StyleSheet } from "react-native"
import Colors from "../../constants/colors";

function FormControl({ label, textInputConfig }) {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  )
}

export default FormControl;

const styles = StyleSheet.create({
  formControl: {
    gap: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray500,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
