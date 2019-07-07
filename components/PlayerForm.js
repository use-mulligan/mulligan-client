import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const PlayerFormScreen = () => {
  const [players, setPlayers] = useState([]);

  handleSubmit = () => {
    setPlayers(players.concat(golferOne));
    setPlayers(players.concat(golferTwo));
    setPlayers(players.concat(golferThree));
    setPlayers(players.concat(golferFour));
    console.log(players);
  };

  return (
    <View>
      <TextInput
        returnKeyType="go"
        onChangeText={input => (golferOne = input)}
        placeholder="Golfer #1"
        placeholderTextColor="rgba(225,225,225,0.7)"
      />

      <TextInput
        returnKeyType="go"
        onChangeText={input => (golferTwo = input)}
        placeholder="Golfer #2"
        placeholderTextColor="rgba(225,225,225,0.7)"
      />

      <TextInput
        returnKeyType="go"
        onChangeText={input => (golferThree = input)}
        placeholder="Golfer #3"
        placeholderTextColor="rgba(225,225,225,0.7)"
      />

      <TextInput
        returnKeyType="go"
        onChangeText={input => (golferFour = input)}
        placeholder="Golfer #4"
        placeholderTextColor="rgba(225,225,225,0.7)"
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayerFormScreen;
