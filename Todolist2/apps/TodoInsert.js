/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Button} from 'react-native';
​
const TodoInsert = ({onAddTodo}) => {

  const [newTodoItem, setNewTodoItem] = useState('');
​
  const handleTodoInput = (newTodo) => {
      setNewTodoItem(newTodo);
  };

  const handleAddTodo = (e) => {
    onAddTodo(newTodoItem);  // 함수
    setNewTodoItem('');      // 빈 값으로 보내줌
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder={'할일을 입력하세요'}
          autoCorrect={true}
          value={newTodoItem}
          onChangeText={handleTodoInput}
          // onKeyPress={handleKeyPress} // 리엑트에 필요한 기능 : 값을 넣고 'Enter'를 사용해서 자동입력되는 기능
          />

      <View style={styles.button}>
        <Button
          color={'#ff9999'}
          title={'ADD'}
          onPress={handleAddTodo} />
      </View>
    </View>
  );
};

​

const styles = StyleSheet.create({
    inputContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
    },
    input: {
            flex: 1,
            padding: 20,
            borderBottomColor: '#9E9E9E',
            borderBottomWidth: 1,
            fontSize: 20,
            marginLeft: 20,
            width: '75%',
    },
    button: {
            marginRight: 20,
    },
});

​export default TodoInsert;
​