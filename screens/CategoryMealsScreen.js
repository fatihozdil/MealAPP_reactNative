import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";
const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        affordibility={itemData.item.affordibility}
        complexity={itemData.item.complexity}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetail", { mealId: itemData.item.id });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const displayesdMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayesdMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id == catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
export default CategoryMealsScreen;
