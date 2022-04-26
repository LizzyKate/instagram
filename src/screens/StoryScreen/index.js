import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import stories from '../../data/stories';
import styles from './styles';

const StoryScreen = () => {
  const route = useRoute();
  const [userStory, setUserStory] = useState(null);

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    const userId = route.params.userId;
    const userStories = stories.find(e => e.user.id === userId);
    setUserStory(userStories);
    setActiveIndex(0);
  }, [route.params.userId]);

  useEffect(() => {
    if (userStory && userStory.stories.length > activeIndex - 1) {
      setActiveStory(userStory.stories[activeIndex]);
    }
  }, [activeIndex, userStory]);
  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: activeStory.imageUri}}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default StoryScreen;
