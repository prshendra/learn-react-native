import { Text, View, StyleSheet, Alert, Dimensions, ScrollView, FlatList, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons'

import Title from "../components/ui/Title";
import NumberGuess from "../components/game/NumberGuess";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Spacer from "../components/ui/Spacer";
import GuessHistoryItem from "../components/game/GuessHistoryItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let min = 1;
let max = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guesses, setGuesses] = useState([initialGuess])
  const { width, height } = useWindowDimensions()
  const isLandscape = height < width;

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  function handleGuess(direction) {
    if ((direction === 'lower' && currentGuess < userNumber)
      || direction === 'higher' && currentGuess > userNumber) {
      Alert.alert("Don't lie!", "Play fair...",
        [{ text: 'Sorry!', style: 'cancel' }]
      )
      return;
    }

    if (direction === 'lower') {
      max = currentGuess
    } else {
      min = currentGuess + 1
    }
    const guessed = generateRandomBetween(min, max, currentGuess)


    if (guessed === userNumber) {
      onGameOver(guesses.length + 1);
      return
    }

    setCurrentGuess(guessed)
    setGuesses(g => [guessed, ...g])
  }

  let screenStyle = {};
  let gameControlStyle = { flex: 0 };
  if (isLandscape) {
    screenStyle = { flexDirection: 'row', marginTop: 20 };
    gameControlStyle.flex = 1;
  }

  return (
    <View style={[styles.screen, screenStyle]}>
      <View style={[styles.gameControl, gameControlStyle]}>
        <Title>Opponent's Guess</Title>
        <NumberGuess>{currentGuess}</NumberGuess>
        <Card>
          <InstructionText>Higher or Lower?</InstructionText>
          <Spacer height={20} />
          <View style={styles.buttonContainer}>
            <PrimaryButton style={{ flex: 1 }}
              onPress={handleGuess.bind(null, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
            <PrimaryButton style={{ flex: 1 }}
              onPress={handleGuess.bind(null, 'higher')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </Card>
      </View>
      <View style={styles.gameHistory}>
        <FlatList
          data={guesses}
          renderItem={({ item }) => <GuessHistoryItem>Your phone guesses {item}</GuessHistoryItem>}
          keyExtractor={item => item}
        />
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 60,
    padding: 20,
    alignItems: 'center',
    gap: 30,
    flex: 1,
  },
  gameControl: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  gameHistory: {
    flex: 1,
    width: '100%',
    gap: 5
  }
});
