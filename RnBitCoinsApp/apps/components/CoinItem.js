import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class CoinItem extends Component {
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    console.log('CoinItem : ', this.props.iconUri);
    return (
      <View style={styles.subContainer}>
        <Image source={{uri: this.props.iconUri}} style={styles.coin} />
        <View style={styles.coinDetail}>
          <Text children={this.props.name} style={styles.coinName} />
          <Text children={`vol: ${this.numberWithCommas(Number(this.props.volumn))}`} style={{color: 'gray'}} />
          <Text children={`$ ${this.numberWithCommas(Number(this.props.price))}`} />
          <Text children={'#' + this.props.rank} style={{fontSize: 20}} />
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
    backgroundColor: '#808080',
    width: 50,
    height: 50,
  },
  subContainer: {
    flexDirection: 'row',
    width: '97.5%',
    height: 90,
    backgroundColor: '#ffff99',
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
  coinName: {
    fontSize: 20,
    width: 100,
    fontWeight: 'bold',
  },
});
