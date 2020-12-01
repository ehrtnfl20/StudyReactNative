import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class CoinItem extends Component {
  render() {
    return (
      <View style={styles.subContainer}>
        <Image source={require('../images/bitcoin.png')} style={styles.coin} />
        <View style={styles.coinDetail}>
          <Text children={this.props.name} style={{fontSize:20, textAlign: 'left'}}/>
          <Text children={'vol:' + this.props.volumn} style={{color: 'gray'}} />
          <Text children={this.props.price} />
          <Text children={'#: ' + this.props.rank} style={{fontSize: 20}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#0000ff',
    width: 50,
    height: 50,
  },
  subContainer: {
    flexDirection: 'row',
    width: '97.5%',
    height: 90,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
  },
  coin: {
    width: 64,
    height: 64,
  },
  coinDetail: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
