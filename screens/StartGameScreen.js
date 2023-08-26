import { TextInput, View, StyleSheet, Alert, useWindowDimensions } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from "react"
import Colors from "../constants/colors"

import Card from "../components/ui/Card"
import Title from "../components/ui/Title"
import InstructionText from "../components/ui/InstructionText"

function StartGameScreen({ onPickNumber }) {
  const [numberInput, setNumberInput] = useState('')
  const { width, height } = useWindowDimensions()

  function resetNumber() {
    setNumberInput('')
  }

  function confirmNumber() {
    const n = parseInt(numberInput)
    // return if NaN
    if (Number.isNaN(n)) {
      Alert.alert(
        "Invalid number!",
        "Please enter a valid number.",
        [
          { text: 'Okay', style: 'destructive', onPress: resetNumber }
        ]
      )
      return
    }

    // can only between 1 >= x <=99
    if (n < 1 || n > 99) {
      Alert.alert(
        "Invalid range!",
        "Please enter a number between 1 and 99.",
        [
          { text: 'Okay', style: 'destructive', onPress: resetNumber }
        ]
      )
      return
    }

    onPickNumber(n)
  }

  let marginTop = 100;
  console.log(height)
  if (height < 400) {
    marginTop = 40;
  }

  return (
    <View style={[styles.screen, { marginTop: marginTop }]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={setNumberInput}
          value={numberInput}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            style={{ flex: 1 }}
            onPress={resetNumber}
          >
            Reset
          </PrimaryButton>
          <PrimaryButton
            style={{ flex: 1 }}
            onPress={confirmNumber}
          >
            Confirm
          </PrimaryButton>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    gap: 30,
    alignItems: 'center'
  },
  numberInput: {
    fontSize: 32,
    height: 50,
    width: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row'
  }
});

export default StartGameScreen
