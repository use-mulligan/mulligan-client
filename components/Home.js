import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Home>
        <StartGameButton navigation={navigate} />
        <MyScoreCardsButton />
      </Home>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={homeStyles.container}>{this.props.children}</View>;
  }
}

class StartGameButton extends React.Component {
  startNewGame = () => {
    this.props.navigation("ScoreCard");
  };

  render() {
    return (
      <TouchableOpacity
        style={homeStyles.buttonContainer}
        onPress={this.startNewGame}
      >
        <Text style={homeStyles.buttonText}>START GAME</Text>
      </TouchableOpacity>
    );
  }
}

class MyScoreCardsButton extends React.Component {
  getMyScoreCards = () => {
    this.navigation;
  };

  render() {
    return (
      <TouchableOpacity
        style={homeStyles.buttonContainer}
        onPress={this.getMyScoreCards}
      >
        <Text style={homeStyles.buttonText}>MY SCORECARDS</Text>
      </TouchableOpacity>
    );
  }
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15,
    marginVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});
