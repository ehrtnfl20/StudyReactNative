/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList, ScrollView, TextInput, StyleSheet} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Users.db'});

const  ViewUser = ({navigation}) => {
let [listItems, setListItems] = useState([]);

    // useEffect(()=>{
    //     db.transaction((txn) => {
    //         txn.executeSql(
    //             'SELECT * FROM table_user',
    //             [],
    //             (txn, res) => {
    //                 console.log('record num: ', res.rows.length);
    //                 var temp = [];
    //                 for (let i = 0; i < res.rows.length; i++) {
    //                     temp.push(res.rows.item(i));
    //                 }
    //                 setListItems(temp);
    //             }
    //         );
    //     });
    // }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <TextInput placeholder="아이디 입력" style={styles.TextInput} />
                <MyButton title="메인으로" onButtonClick="" />
                <View>
                    <Text children="user_id" />
                    <Text children="item.user_name" />
                    <Text children="item.user_contact" />
                    <Text children="item.user_address" />
                </View>
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    TextInput: {borderBottomWidth: 1,
                borderBottomColor: '#1877f2',
                margin: 10,
                fontSize: 16,
            },
});

export default ViewUser;
