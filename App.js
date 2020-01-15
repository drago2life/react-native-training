import React, {useState} from 'react';
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
export default function GoalsApp() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourceGoal] = useState([]);
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourceGoal(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: enteredGoal},
    ]);
  };

  return (
    <View style={styles.screen}>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },

});
