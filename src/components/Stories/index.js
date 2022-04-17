import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    name: 'Lukas',
  },
  {
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    name: 'Vincent',
  },
  {
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    name: 'Jhon',
  },
  {
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    name: 'Luke',
  },
  {
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    name: 'Henry',
  },
  {
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    name: 'Francis',
  },
];

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
      horizontal
    />
  );
};

export default Stories;
