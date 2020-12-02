import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: {uri: 'https://t1.daumcdn.net/cfile/blog/99C485465AE87FF20E'},
    };
  }

  showPicker = () => {
    const options = {
      title: '이미지선택',
      takePhotoButtonTitle: '카메라',
      chooseFromLibraryButtonTitle: '저장소',
      cancelButtonTitle: '취소',
      // customButtons: [
      //   {name: 'kb', title: '카카오톡 이미지 선택'},
      // ],
    };
    ImagePicker.showImagePicker(options, () => {});
  };

  render() {
    return (
      <View style={styles.body}>
        <Button title="이미지 선택" onPress={this.showPicker} />
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
