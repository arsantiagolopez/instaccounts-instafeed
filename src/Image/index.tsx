import { AspectRatio, Image as ChakraImage, Skeleton } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PostEntity, StyleProps } from '../types';
import { Carousel } from './Carousel';

interface Props {
  post: Partial<PostEntity>;
  ratio?: number | Record<string, number>;
}

interface CarouselProps {
  image: string;
  carouselImages?: string[];
}

const Image: FC<Props> = ({ post, ratio }) => {
  const { image, isCarousel, carouselImages } = post;

  const carouselProps: CarouselProps = { image: image!, carouselImages };

  return (
    <AspectRatio ratio={ratio ?? 1} {...styles.aspect}>
      <>
        <Skeleton {...styles.skeleton} />
        {isCarousel ? (
          <Carousel {...carouselProps} />
        ) : (
          <ChakraImage src={image!} {...styles.image} />
        )}
      </>
    </AspectRatio>
  );
};

export { Image };

// Styles

const styles: StyleProps = {
  aspect: {
    width: '100%',
  },
  skeleton: {
    width: '100%',
    height: '100%',
  },
  image: {
    layout: 'fill',
    fit: 'cover',
  },
};
