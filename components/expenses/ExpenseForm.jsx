import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native"

import FormControl from "../ui/FormControl";
import Button from "../ui/Button";
import { getDateStr } from "../../util/date";

function ExpenseForm({ expense, onConfirm, onCancel }) {
  console.log('ExpenseForm rendered...')
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    console.log('e', expense)
    if (expense) {
      setTitle(expense.title)
      setAmount(expense.amount?.toString())
      setCreatedAt(getDateStr(expense.createdAt))
    }
  }, [expense]);

  const handleTitleChange = (value) => {
    setTitle(value)
  }

  const handleAmountChange = (value) => {
    setAmount(value)
  }

  const handleCreatedAtChange = (value) => {
    setCreatedAt(value)
  }

  const handleSubmit = () => {
    // validate all field
    // abort if it's not valid
    if (title === '' || amount === '' || createdAt === '') {
      setError("All field is required")
      return
    }

    const _expense = {
      title: title,
      amount: parseFloat(amount),
      createdAt: new Date(createdAt),
    }

    if (expense?.id) {
      _expense.id = expense.id
    }

    onConfirm(_expense)
  }

  return (
    <View style={styles.form}>
      <FormControl
        label={"Title"}
        textInputConfig={{
          onChangeText: handleTitleChange,
          placeholder: "What's your expense?",
          value: title,
        }}
      />
      <FormControl
        label={"Amount"}
        textInputConfig={{
          onChangeText: handleAmountChange,
          keyboardType: "decimal-pad",
          placeholder: "99.99",
          value: amount
        }}
      />
      <FormControl
        label={"Created At"}
        textInputConfig={{
          onChangeText: handleCreatedAtChange,
          placeholder: "YYYY-MM-DD",
          value: createdAt
        }}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button onPress={handleSubmit}>Confirm</Button>
      </View>
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
  form: {
    width: '100%',
    gap: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 3,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
  error: {
    color: 'red',
  }
});
