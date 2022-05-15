import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListScreen from './src/screens/ListScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from "./src/screens/RegisterScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPassword";


const navigator = createStackNavigator(
  {
    login: LoginScreen,
    list:ListScreen,
    register:RegisterScreen,
    forgot_password: ForgetPasswordScreen
  },
  {
    initialRouteName: 'login',
    defaultNavigationOptions: {
      title: 'StreetFood'
    }
  }
);

export default createAppContainer(navigator);
