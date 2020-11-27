/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Button, Text} from 'react-native';

class MyTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmail = (email) => {
    this.setState({email: email});
  };

  handlePassword = (password) => {
    this.setState({password: password});
  };

  handlelogin = () => {
    // eslint-disable-next-line no-alert
    alert(`email: ${this.state.email}\npassword: ${this.state.password}`);
  };

  handleInput = (text) => {
    this.setState({inputValue: text});
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={style.container}>
        <TextInput
          style={style.textInput}
          underlineColorAndroid={'transparent'}
          placeholder={'Email'}
          value={this.state.email}
          placeholderTextColor={'#9a73ef'}
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={style.textInput}
          underlineColorAndroid={'transparent'}
          placeholder={'Password'}
          value={this.state.password}
          placeholderTextColor={'#9a73ef'}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={this.handlePassword}
        />
       {/* <Button title="Submit" onPress={this.handlelogin} /> */}
       <TouchableOpacity style={style.submitButton}>
         <Text children= {'Submit'} style={style.submitText} onPress={this.handlelogin} />
       </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  submitButton: {
    padding: 10,
    margin: 15,
    height: 40,
    backgroundColor: '#7a42f4',
  },
  submitText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 23,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
  submitButtonText: {
      color: 'white',
  },
});

export default MyTextInput;
