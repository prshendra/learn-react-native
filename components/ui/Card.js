import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    marginHorizontal: 24,
    padding: 15,
    // Android only
    elevation: 4,
    //iOS only
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center'
  },
});
