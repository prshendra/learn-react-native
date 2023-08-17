import { TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
  return (
    <View>
      <TextInput placeholder="auah" />
      <PrimaryButton>Btn1</PrimaryButton>
      <PrimaryButton>Btn2</PrimaryButton>
    </View>
  )
}

export default StartGameScreen
