import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

const Root = createStackNavigator();

const Route = () => {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Home"
        component={BottomHomeNavigator}
        options={{headerShown: false}}
      />
      <Root.Screen
        name="Story"
        component={StoryScreen}
        options={{headerShown: false}}
      />
    </Root.Navigator>
  );
};

export default Route;
