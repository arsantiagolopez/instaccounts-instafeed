import { Flex, Icon, Image } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import { StyleProps } from '../types';

interface Props {
  image: string;
  carouselImages?: string[];
}

const Carousel: FC<Props> = ({ image, carouselImages }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = (num: number): void => {
    setActiveIndex(activeIndex + num);
  };

  const isLeftEnd = activeIndex < 1;
  const isRightEnd =
    carouselImages && activeIndex >= carouselImages?.length - 1;

  return (
    <Flex {...styles.wrapper}>
      <Image
        src={carouselImages ? carouselImages[activeIndex] : image}
        {...styles.image}
      />

      <Flex {...styles.actions}>
        <Icon
          onClick={() => handleNext(-1)}
          as={IoIosArrowDropleftCircle}
          display={isLeftEnd ? 'none' : 'block'}
          {...styles.left}
          {...styles.button}
        />
        <Icon
          onClick={() => handleNext(1)}
          as={IoIosArrowDroprightCircle}
          display={isRightEnd ? 'none' : 'block'}
          {...styles.right}
          {...styles.button}
        />
      </Flex>
    </Flex>
  );
};

export { Carousel };

// Styles

const styles: StyleProps = {
  wrapper: {
    position: 'relative',
    overflowX: 'hidden',
    userSelect: 'none',
  },
  image: {
    layout: 'fill',
    objectFit: 'cover',
    userSelect: 'none',
  },
  actions: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  button: {
    color: 'white',
    fontSize: { base: '1.75em', md: '2em' },
    cursor: 'pointer',
    opacity: 0.8,
  },
  left: {
    alignSelf: 'center',
    marginRight: 'auto',
    marginLeft: { base: '0.25em', md: '0.5em' },
  },
  right: {
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: { base: '0.25em', md: '0.5em' },
  },
};
