import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }
  function addGoalHandler(){
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal visible = {props.visible} animationType = "slide">
      <View style = {styles.inputContainer}>
      <TextInput placeholder = "Course Goal"
                 style = {styles.input}
                 onChangeText ={goalInputHandler}
                 value = {enteredGoal}/>
      <View style = {{flexDirection : "row", justifyContent : 'space-around', width : '60%'}}>
      <View style = {{width : "40%"}}><Button title = "Cancel" color = "red" onPress = {props.onCancel}/></View>
      <View style = {{width : "40%"}}><Button title = "Add" onPress = {addGoalHandler}/></View>
      </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  input :{borderColor: 'black',
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          width: "80%"},
  inputContainer: {flex : 1,
                   justifyContent : "center",
                   alignItems: "center"}
});

export default GoalInput;
