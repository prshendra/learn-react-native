import axios from "axios";

const URL = 'https://react-native-b8f32-default-rtdb.asia-southeast1.firebasedatabase.app/message.json'

export async function fetchMessage(token) {
  const response = await axios.get(URL + '?auth=' + token)
  return response.data;
}
