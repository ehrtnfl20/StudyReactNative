/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1, margin: 5}}
         provider={PROVIDER_GOOGLE}
         initialRegion={{
          latitude: 35.093112,
          longitude: 129.126615,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      />
    </View>
  );
}
