import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/meals/CategoryItem";
import routes from "../routes";

function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryItem
            title={item.title}
            color={item.color}
            onPress={() => {
              navigation.navigate(routes.mealsOverview, {
                categoryId: item.id,
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
