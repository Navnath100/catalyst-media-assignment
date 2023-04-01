import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Plus() {
  return (
    <View style={styles.container}>
      <Text>Plus</Text>
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