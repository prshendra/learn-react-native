import { useReducer, createContext } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "A pair of shoes",
    amount: 59.99,
    createdAt: new Date("2023-09-21"),
  },
  {
    id: "e2",
    title: "A pair of trousers",
    amount: 89.29,
    createdAt: new Date("2023-09-22"),
  },
  {
    id: "e3",
    title: "Some bananas",
    amount: 5.99,
    createdAt: new Date("2023-09-23"),
  },
  {
    id: "e4",
    title: "A book",
    amount: 14.99,
    createdAt: new Date("2023-09-24"),
  },
  {
    id: "e5",
    title: "Another book",
    amount: 18.59,
    createdAt: new Date("2023-02-25"),
  },
  {
    id: "e6",
    title: "A pair of trousers",
    amount: 89.29,
    createdAt: new Date("2023-09-26"),
  },
  {
    id: "e7",
    title: "Some bananas",
    amount: 5.99,
    createdAt: new Date("2023-09-27"),
  },
  {
    id: "e8",
    title: "A book",
    amount: 14.99,
    createdAt: new Date("2023-09-28"),
  },
  {
    id: "e9",
    title: "Another book",
    amount: 18.59,
    createdAt: new Date("2023-09-18"),
  },
  {
    id: "e10",
    title: "A pair of shoes",
    amount: 59.99,
    createdAt: new Date("2023-09-19"),
  },
  {
    id: "e11",
    title: "A pair of shoes",
    amount: 59.99,
    createdAt: new Date("2023-09-19"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, createdAt }) => { },
  updateExpense: ({ id, title, amount, createAt }) => { },
  deleteExpense: (id) => { },
});

const Action = {
  ADD: "add",
  UPDATE: "update",
  DELETE: "delete",
};

function expensesReducer(state, action) {
  switch (action.type) {
    case Action.ADD:
      action.payload.id = new Date().toString() + Math.random().toString();
      return [action.payload, ...state];
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
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(newExpense) {
    dispatch({ type: Action.ADD, payload: newExpense });
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
