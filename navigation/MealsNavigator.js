import Colors from "../constants/Colors";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOpts = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },

  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  cardStyle: {
    backgroundColor: "white",
    opacity: 1,
  },
};
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOpts,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    //initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOpts,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return <Ionicons size={25} color={tabInfo.tintColor} name="ios-star" />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      })
    : createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    //initialRouteName: 'Categories',
/*     navigationOptions:{
      drawerLabel: 'Filters!!'
    }, */
    defaultNavigationOptions: defaultStackNavOpts,
  }
);
const MainNavigator = createDrawerNavigator({
  MealsFavs: {screen : MealsFavTabNavigator,
  navigationOptions:{
    drawerLabel: 'Meals'
  }},
  Filters: FiltersNavigator,
},{

  contentOptions:{
    activeTintColor: Colors.accentColor,
    labelStyle:{
      fontFamily: 'open-sans-bold',
    },
    itemsContainerStyle: {
      marginTop: 20,
    },
  }
});
export default createAppContainer(MainNavigator);
