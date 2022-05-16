import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import MapScreen from './src/screens/MapScreen';
import AccountScreen from './src/screens/AccountScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from "./src/screens/RegisterScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen";

const switchNavigator = createSwitchNavigator({
  loginFLow: createSwitchNavigator(
    {
      Register: RegisterScreen,
      Login: LoginScreen,
      ForgetPassword: ForgetPasswordScreen
    },
    { initialRouteName: 'Login' }
  ),
  mainFlow: createBottomTabNavigator({
    Home: createStackNavigator({
      List: ListScreen,
      Detail: DetailScreen
    }),
    Map: MapScreen,
    Account: AccountScreen
  })
});

export default createAppContainer(switchNavigator);
