import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UserDetails from '../../Context/UserDetails';

export default function Plus() {
  const contextData = React.useContext(UserDetails);

  React.useEffect(() => {
    setTimeout(() => {
      contextData.setUser({ name: "Navnath", age: 23 })
    }, 2000);
  }, [])


  return (
    <View style={styles.container}>
      <Text>Plus</Text>
      <Text>{contextData.name}</Text>
      <Text>{contextData.age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})