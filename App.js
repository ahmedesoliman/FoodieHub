import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    List: ListScreen,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'FoodiesHub'
    }
  }
);

export default createAppContainer(navigator);
