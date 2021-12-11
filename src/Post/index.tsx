import { Avatar, Flex, Icon, Text } from '@chakra-ui/react';
import moment from 'moment';
import React, { FC } from 'react';
import { TiHeartFullOutline } from 'react-icons/ti';
import { Image } from '../Image';
import { PostEntity, StyleProps } from '../types';

interface Props {
  profilePic: string;
  post: PostEntity;
}

const Post: FC<Props> = ({ profilePic, post }) => {
  const {
    username,
    height,
    width,
    caption,
    location,
    likes,
    comments,
    timestamp,
  } = post;

  const weeksFromNow = moment().diff(timestamp, 'weeks');
  const daysSincePost = moment().diff(timestamp, 'days');
  const fromNow =
    daysSincePost > 7 ? `${weeksFromNow}w` : moment(timestamp).fromNow();

  const imageProps = { post, ratio: width / height };
  return (
    <Flex {...styles.wrapper}>
      <Flex {...styles.top}>
        <Avatar src={profilePic} {...styles.avatar} />
        <Flex {...styles.info}>
          <Text {...styles.username}>{username}</Text>
          <Text {...styles.location}>{location}</Text>
        </Flex>
      </Flex>
      <Image {...imageProps} />
      <Flex {...styles.bottom}>
        <Flex {...styles.likes}>
          <Text {...styles.text}>
            <Icon as={TiHeartFullOutline} {...styles.icon} />
            Liked by <b>{likes} people</b>
          </Text>
        </Flex>
        <Flex {...styles.comments}>
          <Flex {...styles.caption}>
            <Flex {...styles.comment}>
              <Text {...styles.text}>
                <b>{username}</b> {caption}
              </Text>
            </Flex>
          </Flex>
          <Text {...styles.allComments}>{comments} comments</Text>
        </Flex>
        <Text {...styles.fromNow}>{fromNow}</Text>
      </Flex>
    </Flex>
  );
};

export { Post };

// Styles

const styles: StyleProps = {
  wrapper: {
    direction: 'column',
    marginTop: { base: '-0.75em', md: '0.75em' },
    marginBottom: '0.75em',
    width: '100%',
    border: { base: 'none', md: '1px solid' },
    borderColor: { base: 'none', md: 'gray.200' },
    borderRadius: '0.25em',
  },
  top: {
    direction: 'row',
    padding: '1em',
    align: 'center',
  },
  avatar: {
    width: '2em',
    height: '2em',
  },
  info: {
    direction: 'column',
    marginX: '1em',
  },
  username: {
    fontWeight: '600',
    fontSize: '10pt',
  },
  location: {
    fontSize: '9pt',
    lineHeight: { base: '1em', md: '1.3em' },
  },
  bottom: {
    direction: 'column',
    width: '100%',
    paddingY: '0',
    paddingX: '1em',
  },
  likes: {
    direction: 'column',
    marginTop: '1em',
  },
  text: {
    fontSize: '11pt',
  },
  icon: {
    marginRight: '2',
    fontSize: '16pt',
    marginBottom: '-1',
  },
  comments: {
    direction: 'column',
    height: '100%',
  },
  caption: {
    direction: 'row',
    marginTop: '1em',
    marginBottom: '0.25em',
    align: 'flex-start',
  },
  comment: {
    direction: 'column',
  },
  allComments: {
    fontSize: { base: '10pt', md: '10pt' },
    color: 'gray.500',
  },
  fromNow: {
    fontSize: '9pt',
    color: 'gray.500',
    paddingTop: '1em',
    paddingBottom: { base: '1.5em', md: '2em' },
  },
};
