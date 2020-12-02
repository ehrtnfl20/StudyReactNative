import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: {uri: 'https://t1.daumcdn.net/cfile/blog/99C485465AE87FF20E'},
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <Button title="이미지 선택" />
        <Text children={this.state.img.uri} style={styles.urlText} />
        <Image source={this.state.img} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e9e9e9',
    flex: 1,
    padding: 15,
  },
  uriText: {
    fontSize: 12,
    color: '#000000',
    margin: 8,
  },
  image: {
    backgroundColor: '#1877f2',
    marginTop: 8,
    flex: 1,
    borderRadius: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
