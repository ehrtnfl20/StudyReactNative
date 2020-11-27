/* eslint-disable prettier/prettier */
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

@observer
class Counter extends Component {
    render () {
        return (
            <View>
                <Text children={ `Count:  ${0}` }/>
                <View style={styles.buttonLayout}>
                    <TouchableOpacity style={styles.button}>
                        <Text children="+" style={styles.buttonText}/>
                    </TouchableOpacity>
                    <Text children="    " />
                    <TouchableOpacity style={styles.button}>
                        <Text children="-" style={styles.buttonText}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    buttonLayout:  {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignContent : 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#333',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
    },
    buttonText : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        },
});


export default Counter;
