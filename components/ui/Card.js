import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    overflow: 'hidden'
  }
});
