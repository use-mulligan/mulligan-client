import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./components/Login";
import HomeScreen from "./components/Home";
import ScoreCardScreen from "./components/ScoreCard";

const MainNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    ScoreCard: ScoreCardScreen
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
