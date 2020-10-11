import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  function addGoalHandler(goal){
    setCourseGoals(currentGoals => [...currentGoals,
      {key: Math.random().toString(), value: goal}]);
    setIsAddMode(false);
  }
  function removeGoalHandler(goalKey){
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal) => goal.key !== goalKey);
    })
  }
  function cancelGoalAdditionHandler(){
    setIsAddMode(false);
  }
  return (

    <View style={styles.container}>
    <Button title = "Add New Goal" onPress = {() => setIsAddMode(true)}/>
    <GoalInput visible = {isAddMode} onAddGoal = {addGoalHandler} onCancel = {cancelGoalAdditionHandler}/>
    <FlatList data = {courseGoals}
              renderItem = {itemData =>
                 <GoalItem id = {itemData.item.key} title = {itemData.item.value} onDelete = {removeGoalHandler}/>}/>
    </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {flexDirection : 'row',
                   justifyContent : "space-between"}

});
