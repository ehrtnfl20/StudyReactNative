/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {SafeAreaView, Text, StatusBar, View, StyleSheet} from 'react-native';

​
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'todo.db'});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      todos: [
        { id: Number, content: '', checked: '', deletenum: Number },
      ],
    };
  }

  componentDidMount() {
    this.initalDBTable();
    this.ViewAllTodos();
  }

  initalDBTable = () => {
    const query =  `SELECT name FROM sqlite_master WHERE type='table' and name='todo'`;
    db.transaction((txn) => {
      txn.executeSql(query, [], (tx, res) => {
          if (res.rows.length === 0) {
            const dropTableQuery = `DROP TABLE IF EXISTS todo`;
            const createTableQuery =
              `CREATE TABLE todo (
                      user_id INTEGER
                 user_content TEXT NOT NULL
                 user_checked TEXT NOT NULL)`;
            txn.executeSql(dropTableQuery, []);
            txn.executeSql(createTableQuery, []);
            console.log('table 생성');
          }
        }
      );
    }); //transaction
  }

  onRemove = (id) => {
    db.transaction((txn) => {
      const deleteQuery = `DELETE FROM todo WHERE id=?`;
      txn.executeSql(deleteQuery, [id], (tx, res) => {
        this.ViewAllTodos();
      });
    });
  };

  onAddTodo =(content) => {
    const insertQuery = `INSERT INTO todo(user_content, User_checked, deletenum) value(?, 'false', 0)`;
    db.transaction((txn) => {
      txn.executeSql(insertQuery, [content], (tx, res) => {
        this.ViewAllTodos();
      });
    });
  };

​  onToggle = (id, checked) => {
    if (checked === 'true') {
      checked = 'flase';
    } else if (checked === 'flase') {
      checked = 'true';
    }

    const insertQuery = `UPDATE todo SET checked = ? WHERE id = ? `;
    db.transaction((txn) => {
      txn.executeSql(insertQuery, [id, checked], (tx, res) => {
        this.ViewAllTodos();
      });
    });
  };
​
  ViewAllTodos = () => {
    db.transaction((txn) => {
      const selectQuery = `SELECT * FROM todo WHERE deletenum=0`;
      txn.executeSql(selectQuery, [], (tx, res) => {
        let tmp = [];
        for (let i = 0;  i < res.row.length; i++) {
          tmp.push(res.rows.item(i));
        }
        this.setState({ todos: tmp });
      });
    });
  };

​
  ViewDeletedTodo = () => {
    db.transaction((txn) => {
      console.log('삭제');
      const selectQuery = `SELECT * FROM todo WHERE deletenum=2`;
      txn.executeSql(selectQuery, [], (tx, res) => {
        let tmp = [];
        for (let i = 0;  i < res.row.length; i++) {
          tmp.push(res.rows.item(i));
        }
        this.setState({ todos: tmp });
      });
    });
  };

​  render () {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Text children="Todo List" style={styles.appTitle} />
          <View style={styles.card}>
            <TodoInsert onAddTodo={this.onAddTodo} />
            <TodoList todos={this.state.todos} 
                      onRemove={this.onRemove} 
                      onToggle={this.onToggle} 
                      ViewDeletedTodo={this.ViewDeletedTodo}
                      ViewAllTodos={this.ViewAllTodos}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

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

​
