import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text children={this.props.title} style={styles.title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    alignContent: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#1877f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
