import { ChakraProvider } from '@chakra-ui/provider';
import React from 'react';
import { Post } from '../Post';
import { AccountsWithPosts, PostEntity } from '../types';

/**
 * Get all of your instagram's, ready to map, styled components.
 * @param {object} accounts - accounts object with avatar and posts array.
 * @returns an array of multiple react components.
 */

const getPosts = (accounts: AccountsWithPosts): JSX.Element[] => {
  let posts: PostEntity[] = [];
  let profilePics: Record<string, string> = {};
  let usernames: string[] = [];

  usernames = Object.keys(accounts).map(key => key);

  usernames?.forEach(username => {
    const { posts: userPosts } = accounts[username];
    posts = [...posts, ...userPosts];
    profilePics = {
      ...profilePics,
      ...{ [username]: accounts[username].profilePic },
    };
  });

  return posts.map((post: PostEntity) => {
    const { id, username } = post;
    const profilePic = profilePics[username];
    const postProps = { post, profilePic };
    return (
      <ChakraProvider>
        <Post key={id} {...postProps} />
      </ChakraProvider>
    );
  });
};

export { getPosts };
