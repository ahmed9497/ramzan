import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import Splash from '../screens/Splash';

const Routes = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [splash, setSplash] = useState(true);

  const onAuthStateChanged = (user) => {
    console.log(user)
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount


  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      // navigation.replace("Login");
      setSplash(false)
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [])


  if (splash) {
    return  ( <Splash />)
  }
  else{
    
    if (initializing) return null;
  
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
  }
};

export default Routes;
