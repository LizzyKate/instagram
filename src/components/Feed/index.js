import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';

const data = [
  {
    id: 1,
    user: {
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
      name: 'Lukas',
    },
    imageUri:
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    caption: 'Beautiful City',
    likesCount: 60,
    postedAt: '6 days ago',
  },
  {
    id: 2,
    user: {
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
      name: 'Jhon',
    },
    imageUri:
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    caption: 'Beautiful City',
    likesCount: 60,
    postedAt: '6 days ago',
  },
  {
    id: 3,
    user: {
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
      name: 'Kate',
    },
    imageUri:
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    caption: 'Beautiful City',
    likesCount: 60,
    postedAt: '6 days ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      ListHeaderComponent={Stories}
      keyExtractor={item => item.id}
      data={data}
      renderItem={({item}) => <Post detail={item} />}
    />
  );
};

export default Feed;
