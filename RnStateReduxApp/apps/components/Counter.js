/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';


const Counter = ({index, value, handleIncrement, handleDecrement}) => {
    return (
        <View style={styles.outline}>
            <Text children={ `Count:  ${value.counterNum}` }/>
            <View style={styles.buttonLayout}>

                <TouchableOpacity style={styles.button} 
                                  onPress={() => handleIncrement(index)} >
                    <Text children="+" style={styles.buttonText}/>
                </TouchableOpacity>

                <Text children="    " />

                <TouchableOpacity style={styles.button} 
                                  onPress={() => handleDecrement(index)}>
                    <Text children="-" style={styles.buttonText}/>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonLayout:  {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignContent : 'center',
        justifyContent: 'center',
    },
    outline: {
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

Counter.propTypes = {
    index: PropTypes.number,
    value: PropTypes.object,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
};


Counter.defaultProps = {
    index: 0,
    value: { counterNum: 0 },
    handleIncrement: () => console.warn('undefined handleIncrement'),
    handleDecrement: () => console.warn('undefined handleDecrement Counter'),
};

export default Counter;
