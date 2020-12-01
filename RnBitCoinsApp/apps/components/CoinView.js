/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import CoinItem from './CoinItem';
import axios from 'axios';

const sampleDate = [
  {
       'circulating_supply': 18556575,
        'cmc_rank': 1,
        'date_added': '2013-04-28T00:00:00.000Z',
        'id': 1,
        'last_updated': '2020-11-28T11:27:02.000Z',
        'max_supply': 21000000,
        'name': 'Bitcoin',
        'num_market_pairs': 9550,
        'platform': null,
        'quote': [Object],
        'slug': 'bitcoin',
        'symbol': 'BTC',
        'tags': [Array],
        'total_supply': 18556575,
  },
  {
    'circulating_supply': 111111,
     'cmc_rank': 2,
     'date_added': '2020-12-01T00:00:00.000Z',
     'id': 2,
     'last_updated': '2020-12-01T11:27:02.000Z',
     'max_supply': null,
     'name': 'Ethereum',
     'num_market_pairs': 5775,
     'platform': null,
     'quote': [Object],
     'slug': 'Ethereum',
     'symbol': 'ETH',
     'tags': [Array],
     'total_supply': 111111,
  },
];

const client = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com',
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'X-CMC_PRO_API_KEY': '4a3f468b-13d6-44af-9a4e-b04891b281f4',
  },
});


export default class CoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [],  // API 진짜 데이터 배열
      isLoading: false,
    };
  }

  componentDidMount() {
   // this.getCoinData();
   // setInterval(() => {
   //   this.getCoinData();
   // }, 10000);  //10초마다 1000ms => 1초, 10000 10초
  }

  getCoinData = async () => {
    this.setState({ isLoading: true});

    try {
      await client
        .get('/v1/cryptocurrency/listings/latest', {
          params: {limit: 10},
        } )
        .then((res) => {
         //console.log(res);
         console.log('API 조회완료');
         this.setState({
           coinData:res.data.data,
           isLoading: false,
          });
        })
        .catch((err) => {
          console.error('getCoinData() : ', err);
          alert("API조회 오류발생,\n관리자문의 요망")
        });
    } catch (error) {
      console.error('getCoinData() : ', error);
      alert("API오류 발생,\n관리자문의 요망");
    }
  }

  render() {
    let coinItem = sampleDate.map((itme, index) => {
      const {cmc_rank, id, name, num_market_pairs, total_supply} = itme; //item 객체를 재구성

      return (
        <CoinItem
          key={index}
          name={name}
          rank={cmc_rank}
          price={num_market_pairs}
          volumn={total_supply} />
      );
    });

    return (
      <ScrollView>
        <Button title ="재조회" onPress={this.getCoinData} />
        <View style={styles.container}>{coinItem}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  box: {
    backgroundColor: '#0000ff',
    width: 50,
    height: 50,

  },
  subContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  coin: {
    width: 64,
    height: 64,
  },
});
