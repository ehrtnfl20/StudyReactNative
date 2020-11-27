import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, View, StyleSheet} from 'react-native';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  //todos: {id: 1, textValue: 'todoitem', checked: true/false }
  const [todos, setTodos] = useState([]);
  //      [배열, 함수]

  //할일 목록 추가
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {id: todos.length + 1, textValue: text, checked: false},
    ]);
    // Axios DB작업은 여기서 호출하면 됨 / INSERT API 호출
  };

  function onRemove(id) {
    console.log(`App /delete id => ${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
     // Axios DB 처리  // DELETE API 호출
  }

  const onToggle = (id) => {
    console.log(`App / toggle id => ${id}`);
    console.log(`App onToggle before =>`, todos);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text children="Todo List" style={styles.appTitle} />
        <View style={styles.card}>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8080',
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;
