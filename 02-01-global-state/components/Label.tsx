import { View, Text } from 'react-native'
import React from 'react'
import useCounter from '../states/useCounter'

export default function Label() {

  const { counter } = useCounter();

  return (
    <View>
      <Text>Counter: {counter}</Text>
    </View>
  )
}