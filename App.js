import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from './src/screens/LoginScreen';
import ListScreen from "./src/screens/ListScreen";
import DetailScreen from "./src/screens/DetailScreen";


const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    List: ListScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'StreetFood'
    }
  }
);

export default createAppContainer(navigator);
