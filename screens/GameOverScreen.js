import { Text, View, Image, StyleSheet, useWindowDimensions } from "react-native";
import Title from '../components/ui/Title';
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({ numOfRounds, secretNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  let screenStyle = { flexDirection: "column" }
  let imageContainerStyle = {}
  let innerContainerStyle = { gap: 20, flex: 0, justifyContent: 'center', alignItems: 'center' }
  if (isLandscape) {
    screenStyle = { flexDirection: "row" };
    imageContainerStyle = {
      width: 240,
      height: 240,
      borderRadius: 120,
    };
    innerContainerStyle.flex = 1;
  }


  return (
    <View style={[styles.screen, screenStyle]}>
      <View style={innerContainerStyle}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageContainerStyle]}>
          <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
      </View>
      <View style={innerContainerStyle}>
        <Text style={styles.summaryText}>
          Phone guessed number <Text style={styles.summaryInnerText}>{secretNumber}</Text> in{" "}
          <Text style={styles.summaryInnerText}>{numOfRounds}</Text> rounds.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    padding: 15,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: Colors.primary800,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'center'
  },
  summaryInnerText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
});
