import { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  user: {
    token: null,
    email: null,
    expiresIn: null,
  },
  authenticate: (user) => { },
  logout: () => { }
})

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('user').then((userJson) => {
      const user = JSON.parse(userJson)
      setUser(user)
    })
  }, []);

  function authenticate(user) {
    setUser(user)
    // store auth state in device storage
    const userJson = JSON.stringify(user)
    AsyncStorage.setItem('user', userJson)
  }

  function logout() {
    setUser(null)
    // remove stored auth state on logout
    AsyncStorage.removeItem('user')
  }

  const value = {
    user: user,
    authenticate: authenticate,
    logout: logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
