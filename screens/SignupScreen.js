import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/context/auth';

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false)
  const authCtx = useContext(AuthContext)

  const handleSignup = async ({ email, password }) => {
    setIsLoading(true)
    try {
      const response = await createUser(email, password)
      const user = {
        token: response.data.idToken,
        email: email,
        expiresIn: parseInt(response.data.expiresIn),
      }
      console.log('create user', user)
      authCtx.authenticate(user)
      // TODO: navigate to WelcomeScreen, by replacing auth stack with authenticated stack
    } catch (error) {
      Alert.alert("Sign up error!", "Cannot sign user up, please check your input.")
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
