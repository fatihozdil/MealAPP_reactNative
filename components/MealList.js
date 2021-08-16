import React from "react";
import { View,  StyleSheet, FlatList } from "react-native";

import MealItem from "./MealItem";

const MealList = (props) => {
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
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
