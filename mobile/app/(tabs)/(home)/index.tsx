import { Text, StyleSheet, Pressable } from 'react-native';

import React from 'react';
import LoginScreen from '@/components/pages/login';
import FeedScreen from './home';

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handlePress = () => {
    setIsLoggedIn(false)
  }
  
  return (

    <>

      {isLoggedIn ?
          <>
          <FeedScreen props={{setIsLoggedIn: setIsLoggedIn}} />
          </>
          
          :
          <LoginScreen props={{setIsLoggedIn: setIsLoggedIn}} />
      }
    </>

  );
}


const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 25,
  },
  button: {
    marginTop: 35,
    backgroundColor: "#12edd8",
    fontSize: 25,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 25,
  },
});
