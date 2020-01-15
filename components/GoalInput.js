import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const GoalInput = props => {
  return <View style={styles.inputContainer}>
      <TextInput
          placeholder="Course Goals"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
      />
      <Button title="ADD" onPress={addGoalHandler} />
  </View>;
};

const styles = StyleSheet.create({});

export default GoalInput;
