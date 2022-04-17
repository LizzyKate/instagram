import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({user}) => {
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={user.imageUri} size={40} />
        <Text>{user.name}</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={15} color="" />
      </View>
    </View>
  );
};

export default Header;
