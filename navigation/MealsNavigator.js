import Colors from "../constants/Colors";
import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },

      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      cardStyle: {
        backgroundColor: "white",
        opacity: 1,
      },
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
       return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
    }
  }},
  Favorites : {screen: FavoritesScreen, navigationOptions: {
    tabBarLabel:'Favorites!',
    tabBarIcon: (tabInfo) => {
      return <Ionicons size={25} color={tabInfo.tintColor} name="ios-star" />
    }
  }}
},{
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
  }
});
export default createAppContainer(MealsFavTabNavigator);
