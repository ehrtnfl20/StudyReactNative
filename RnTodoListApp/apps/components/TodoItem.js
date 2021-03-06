/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({id, textValue, checked, onRemove, onToggle, content}) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => onToggle(id, checked)}>
                {checked === 'true' ? (
                    <View style={styles.checkedCircle}>
                        <Icon name="check" size={30} color="#ff8080" />
                    </View>
                ) : (
                    <View style={styles.circle}>
                        <Icon name="check" size={30} color="#ff8080" />
                    </View>
                )}
            </TouchableOpacity>
            <Text
                children={textValue}
                style={[styles.itemText,
                    checked === 'true' ? styles.strikeText : styles.unstrikeText ]} />
            <TouchableOpacity onPress={() => onRemove(id)}>
                <View style={styles.delete} >
                     <MatIcon name="delete-outline" size={30} color="#000066" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    circle: {
        marginLeft: 20,
        marginRight: 20,
        width: 30,
        height: 30,
        borderColor: '#ff9999',
        borderWidth: 2,
        borderRadius: 2,
    },
    checkedCircle: {
        marginLeft: 20,
        marginRight: 20,
    },
    itemText: {
        fontSize: 20,
        marginVertical: 15,
        flex: 1,
    },
    strikeText: {
        color: '#9E9E9E',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#ff9999',
    },
    delete: {
        marginLeft: 20,
        marginRight: 20,
    },
});

export default TodoItem;
