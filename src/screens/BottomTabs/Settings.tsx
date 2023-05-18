import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UserDetails from '../../Context/UserDetails';

export default function Settings() {
  const contextData = React.useContext(UserDetails);

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <View>
        {
          contextData?.state?.todos?.map((todo: any) => <Text>{todo}</Text>)
        }
      </View>
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