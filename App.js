import { useState } from "react";
import { useFonts } from 'expo-font'
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from 'expo-app-loading';

export default function App() {
  const [isFontLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })
  const [pickedNumber, setPickedNumber] = useState(0)
  const [gameIsOver, setGameIsOver] = useState(false);
  const [numOfRounds, setNumOfRounds] = useState(0)

  function handleGameOver(numOfRounds) {
    setGameIsOver(true)
    setNumOfRounds(numOfRounds);
  }

  function handleStartNewGame() {
    setPickedNumber(0)
    setNumOfRounds(0);
    setGameIsOver(false);
  }

  if (!isFontLoaded) {
    return <AppLoading />
  }

  let screen = <StartGameScreen onPickNumber={setPickedNumber} />

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} onGameOver={handleGameOver} />
  }

  if (gameIsOver) {
    screen = <GameOverScreen
      numOfRounds={numOfRounds}
      secretNumber={pickedNumber}
      onStartNewGame={handleStartNewGame} />
  }

  return (
    <LinearGradient
      colors={[
        Colors.primary700,
        Colors.accent500,
      ]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={{ flex: 1 }}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: 'black',
    flex: 1,
  },
  imageBackground: {
    opacity: 0.2
  }
});
