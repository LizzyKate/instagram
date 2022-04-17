import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import FTIcon from 'react-native-vector-icons/Fontisto';
import IOIcon from 'react-native-vector-icons/Ionicons';
import FOIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({caption, likes, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    setIsLiked(!isLiked);
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
  };

  useEffect(() => {
    setLikesCount(likes);
  }, [likes]);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <Icon name="heart" size={25} color={'#c30000'} />
            ) : (
              <Icon name="hearto" size={25} color={'#545454'} />
            )}
          </TouchableWithoutFeedback>
          <FTIcon name="comment" size={23} color={'#545454'} />
          <IOIcon name="paper-plane-outline" size={25} color={'#545454'} />
        </View>

        <FOIcon name="bookmark-o" size={25} color={'#545454'} />
      </View>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
