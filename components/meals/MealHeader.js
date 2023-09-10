import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'


function MealHeader({ meal, titleStyle }) {
  return (
    <View style={styles.outerWrapper}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={[styles.title, titleStyle]}>{meal.title}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Ionicons name="time-outline" size={20} />
          <Text style={styles.detailText}>{meal.duration}m</Text>
        </View>
        <View style={styles.detail}>
          <Ionicons name="calendar-outline" size={20} />
          <Text style={styles.detailText}>{meal.complexity}</Text>
        </View>
        <View style={styles.detail}>
          <Ionicons name="archive-outline" size={20} />
          <Text style={styles.detailText}>{meal.affordability}</Text>
        </View>
      </View>
    </View>
  )

}

export default MealHeader;

const styles = StyleSheet.create({
  outerWrapper: {
    // flex: 1
    height: 300,
    gap: 5,
    justifyContent: "flex-start"
  },
  imageWrapper: {
    flex: 1
  },
  titleWrapper: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 1,
    padding: 10,
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  detailText: {
    // textAlign: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  }
});
