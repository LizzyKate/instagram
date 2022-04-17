import React from 'react';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';

const Post = ({detail}) => {
  return (
    <>
      <Header user={detail.user} />
      <Body imageUri={detail.imageUri} />
      <Footer
        caption={detail.caption}
        likes={detail.likesCount}
        postedAt={detail.postedAt}
      />
    </>
  );
};

export default Post;
