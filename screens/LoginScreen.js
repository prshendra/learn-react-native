import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/context/auth';

function LoginScreen() {
  const authCtx = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true)
    try {
      const response = await login(email, password)
      const user = {
        email: email,
        token: response.data.idToken,
        expiresIn: response.data.expiresIn,
      }
      console.log('login user', user)
      authCtx.authenticate(user)
    } catch (error) {
      Alert.alert("Login failed!", "Cannot log user in, please check your input")
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Logging in..." />
  }

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
