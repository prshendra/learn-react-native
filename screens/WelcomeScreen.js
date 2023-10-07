import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/context/auth';
import { fetchMessage } from '../util/message';

function WelcomeScreen() {
  const authCtx = useContext(AuthContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    (async () => {
      const message = await fetchMessage(authCtx.user.token)
      setMessage(message)
    })()
  }, [])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome, {authCtx.user.email}!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
