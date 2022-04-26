import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/logo.png';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerTitle: () => (
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          ),
          headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={25} color={'#000'} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 50,
  },
});

export default HomeStackScreen;
