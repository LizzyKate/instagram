import React from 'react';
import {FlatList} from 'react-native';
import stories from '../../data/stories';
import Story from '../UserStoryPreview';
import styles from './styles';

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      data={stories}
      keyExtractor={item => item.user.id}
      renderItem={({item}) => <Story story={item} />}
      horizontal
    />
  );
};

export default Stories;
