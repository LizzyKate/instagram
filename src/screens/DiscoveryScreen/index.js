/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const DiscoveryScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center', color: 'white'}}>Discovery</Text>
    </View>
  );
};

export default DiscoveryScreen;
