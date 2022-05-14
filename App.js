import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListScreen from './src/screens/ListScreen';
import LoginScreen from './src/screens/LoginScreen';


const navigator = createStackNavigator(
  {
    login: LoginScreen,
    list:ListScreen
  },
  {
    initialRouteName: 'login',
    defaultNavigationOptions: {
      title: 'FoodiesHub'
    }
  }
);

export default createAppContainer(navigator);
