import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function GoalsApp() {
  const [courseGoals, setCourseGoal] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id != goalId);
    });
  };

    const [isAddMode, setIsAddMode] = useState(false);
 const cancelGoalAdd
  return (
    <View style={styles.screen}>
        <Button title="Add new Goal" onPress={() => setIsAddMode(true) } />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
