import axios from "axios";

const BASE_URL = 'https://react-native-b8f32-default-rtdb.asia-southeast1.firebasedatabase.app'

/**
Create expense and store it to firebase
@returns expense id
*/
export async function createExpense(expense) {
  const response = await axios.post(BASE_URL + '/expenses.json', expense)
  return response.data.name
}

export function updateExpense(id, expense) {
  return axios.put(BASE_URL + `/expenses/${id}.json`, expense)
}

export function deleteExpense(id) {
  return axios.delete(BASE_URL + `/expenses/${id}.json`)
}

export function fetchExpenses() {
  return axios.get(BASE_URL + '/expenses.json')
}
