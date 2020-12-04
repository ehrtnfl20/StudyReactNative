/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity, View, Text} from 'react-native';

import TodoItem from './TodoItem';

const TodoList = ({todos, onRemove, onToggle, ViewDeletedTodo, ViewAllTodos}) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => ViewDeletedTodo()}
            >
                <View>
                    <Text styles={styles.text} children="삭제 TodoList 보기" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => ViewAllTodos()}
            >
                <View >
                    <Text styles={styles.text} children="TodoList 보기" />
                </View>
            </TouchableOpacity>
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;
