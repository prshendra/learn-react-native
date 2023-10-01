import { useReducer, createContext } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, createdAt }) => { },
  updateExpense: ({ id, title, amount, createAt }) => { },
  setExpenses: ([]) => { },
  deleteExpense: (id) => { },
});

const Action = {
  ADD: "add",
  SET: "set",
  UPDATE: "update",
  DELETE: "delete",
};

function expensesReducer(state, action) {
  switch (action.type) {
    case Action.ADD:
      return [action.payload, ...state];
    case Action.SET:
      return action.payload ?? [];
    case Action.UPDATE:
      const expenseIndex = state.findIndex((e) => e.id === action.payload.id);
      state[expenseIndex] = { ...action.payload };
      return [...state];
    case Action.DELETE:
      return state.filter((e) => e.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, []);

  function addExpense(newExpense) {
    dispatch({ type: Action.ADD, payload: newExpense });
  }

  function setExpenses(expenses) {
    dispatch({ type: Action.SET, payload: expenses });
  }

  function updateExpense(expense) {
    dispatch({ type: Action.UPDATE, payload: expense });
  }

  function deleteExpense(id) {
    dispatch({ type: Action.DELETE, payload: id });
  }

  const value = {
    expenses,
    addExpense,
    setExpenses,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
