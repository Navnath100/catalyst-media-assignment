import { View, Text, Button } from 'react-native'
import React, { useState, useReducer } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './src/screens/Onboarding';
import Home from './src/screens/Home';
import Task from './src/screens/Task';
import UserDetails from './src/Context/UserDetails';
import TodoList from './src/screens/ToDo';
import ToDo from './src/Reducer/ToDo';

const Stack = createNativeStackNavigator();

export default function App() {

  const [userDetails, setUserDetails] = useState({
    name: "Mayank",
    age: 30,
    state: {
      todos: [],
      filter: 'all',
    }
  });

  return (
    <UserDetails.Provider value={{ ...userDetails, setUser: (details: any) => { setUserDetails(details) } }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Task'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Task" component={Task} />
          <Stack.Screen name="ToDo" component={TodoList} />
          <Stack.Screen name="OnboardingScreens" component={Onboarding} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserDetails.Provider>
  )
}