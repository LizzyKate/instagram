/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const NotificationsScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center', color: 'white'}}>Notification</Text>
    </View>
  );
};

export default NotificationsScreen;
