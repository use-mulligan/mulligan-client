import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ListView
} from "react-native";

const ScoreCardScreen = () => {
  const [strokes, setStrokes] = useState(0);
  const [holeNumber, setHoleNumber] = useState(1);
  let [playersScore, setPlayersScore] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  let [totalStrokes, setTotalStrokes] = useState(0);

  addStroke = () => {
    setStrokes(strokes + 1);
  };

  removeStroke = () => {
    if (strokes > 0) setStrokes(strokes - 1);
  };

  finishHole = () => {
    if (holeNumber < 18) {
      if (holeNumber == 1) {
        setPlayersScore(
          playersScore.concat([
            {
              playerName: "Props",
              hole: holeNumber,
              strokes: strokes
            }
          ])
        );
      } else {
        setPlayersScore([
          ...playersScore,
          {
            playerName: "Props",
            hole: holeNumber,
            strokes: strokes
          }
        ]);
      }
      setHoleNumber(holeNumber + 1);
      setStrokes(0);
    }
  };

  endGame = () => {
    setPlayersScore([
      ...playersScore,
      {
        playerName: "Props",
        hole: holeNumber,
        strokes: strokes
      }
    ]);
    setIsGameOver(true);

    playersScore.map(score => {
      setTotalStrokes((totalStrokes += score.strokes));
    });
  };

  return (
    <View>
      {!isGameOver ? (
        <>
          <Text style={scoreCardStyles.holeNumberMessage}>
            Hole # {holeNumber}
          </Text>
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
          <View>
            {holeNumber < 18 ? (
              <TouchableOpacity
                style={scoreCardStyles.submitButtonContainer}
                onPress={finishHole}
              >
                <Text style={scoreCardStyles.buttonText}>NEXT HOLE</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={scoreCardStyles.submitButtonContainer}
                onPress={endGame}
              >
                <Text style={scoreCardStyles.buttonText}>END GAME</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      ) : (
        <>
          <Text>Game Over!</Text>
          <Text>You scored: {totalStrokes}</Text>
        </>
      )}
    </View>
  );
};

const scoreCardStyles = StyleSheet.create({
  buttonContainer: {
    height: 100,
    width: 100,
    backgroundColor: "#2980b6",
    paddingVertical: 15,
    marginVertical: 15
  },
  submitButtonContainer: {
    height: 100,
    width: 300,
    backgroundColor: "#2980b6",
    paddingVertical: 15,
    marginVertical: 30
  },
  buttonText: {
    textAlign: "center",
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
