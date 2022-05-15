import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from './src/screens/LoginScreen';
import ListScreen from "./src/screens/ListScreen";
import DetailScreen from "./src/screens/DetailScreen";
import MapScreen from "./src/screens/MapScreen";
import AccountScreen from "./src/screens/AccountScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    List: ListScreen,
    Detail: DetailScreen,
    Map: MapScreen,
    Account: AccountScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'StreetFood'
    }
  }
);

export default createAppContainer(navigator);
