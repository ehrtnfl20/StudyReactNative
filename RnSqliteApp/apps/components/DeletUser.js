/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {SafeAreaView, View, Text,TextInput, StyleSheet, Alert} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Users.db'});

const  DeleteUser = ({navigation}) => {
    let[userId, setInputUserId] = useState(''); //String

    const deleteUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'DELETE FROM table_user WHERE user_id = ?',
                [userId],
                (txn, res) => {
                    console.log('res: ', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '삭제 성공',
                            '사용자를 삭제했습니다.',
                            [
                                {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert("삭제 실패");
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text children="삭제화면" style={{ textAlign: 'center', fontSize: 20 }} />
                <TextInput placeholder="아이디 입력" style={styles.textInput}
                    onChangeText={(userId) => setInputUserId(userId)}  />
                <MyButton title="삭제" onButtonClick={deleteUser} />
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: {borderBottomWidth: 1,
                borderBottomColor: '#1877f2',
                margin: 10,
                fontSize: 16,
            },
});

export default DeleteUser;
