import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrementCount = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} />
    </View>
  );
}

export default Counter;