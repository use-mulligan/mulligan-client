import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

const ScoreCardScreen = () => {
  const [strokes, setStrokes] = useState(0);
  const [holeNumber, setHoleNumber] = useState(1);
  let [playersScore, setPlayersScore] = useState([{}]);

  addStroke = () => {
    setStrokes(strokes + 1);
  };

  removeStroke = () => {
    if (strokes > 0) setStrokes(strokes - 1);
  };

  finishHole = () => {
    if (holeNumber < 18) {
      setHoleNumber(holeNumber + 1);
      setStrokes(0);

      holeNumber == 1
        ? setPlayersScore(
            (playersScore = [
              {
                playerName: "Props",
                hole: holeNumber,
                strokes: strokes
              }
            ])
          )
        : setPlayersScore(
            playersScore.concat([
              { playerName: "Props", hole: holeNumber, strokes: strokes }
            ])
          );
    }
    console.log(playersScore);
  };

  return (
    <View>
      <Text style={scoreCardStyles.holeNumberMessage}>Hole # {holeNumber}</Text>
      <Text style={scoreCardStyles.strokesMessage}>Strokes: {strokes}</Text>
      <TouchableOpacity
        style={scoreCardStyles.buttonContainer}
        onPress={addStroke}
      >
        <Text style={scoreCardStyles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={scoreCardStyles.buttonContainer}
        onPress={removeStroke}
      >
        <Text style={scoreCardStyles.buttonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={scoreCardStyles.buttonContainer}
        onPress={finishHole}
      >
        <Text style={scoreCardStyles.buttonText}>END HOLE</Text>
      </TouchableOpacity>
    </View>
  );
};

const scoreCardStyles = StyleSheet.create({
  buttonContainer: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(225,225,225,0.2)"
  },
  buttonText: {
    fontSize: 40
  },
  holeNumberMessage: {
    fontSize: 100,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  strokesMessage: {
    fontSize: 60,
    marginTop: 30,
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default ScoreCardScreen;
