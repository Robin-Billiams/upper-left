import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Virtuoso } from 'react-virtuoso';
import CarouselImage from './CarouselImage.jsx';
import { carouselModule, upArrow, downArrow, inactive, carouselContainer } from '../styles.css';

const SRC_URL = 'https://hrr48madisonfecbrazil.s3-sa-east-1.amazonaws.com/';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Carousel = (props) => {
  const { height, width } = useWindowDimensions();
  const { images, activeImage, position, handleClickUp, handleClickDown, setActiveImage } = props;
  const GenerateImage = (index) => {
    return <CarouselImage isActive={activeImage === index} image={images[index]} key={`image${index}`} setActiveImage={setActiveImage} index={index} />
  }

  const virtuoso = useRef(null);
  return (
    <div style={{ display: 'flex' }} className={carouselModule}>
      <img id="upArrow"
        className={`${upArrow} ${inactive}`}
        src={SRC_URL + 'upArrow.png'}
        alt = "up Arrow"
        onClick={() => {
          const min = 0;
          const newPosition = position - 6 > min ? position - 6 : min;
          virtuoso.current.scrollToIndex({
            index: newPosition,
            align: 'start',
            behavior: 'smooth',
          });
          props.handleClickUp(newPosition);
          return false;
        }}
        />
      <div>
        <Virtuoso
          className={carouselContainer}
          totalCount={images.length}
          ref={virtuoso}
          item={GenerateImage}
          style={{ height: `${height} * 0.8`, maxWidth: `calc( ${width} * 0.09 )` }}
        />
      </div>
      <img id="downArrow" className={downArrow} src={SRC_URL + 'downArrow.png'} alt = "down Arrow" onClick={() => {
        const max = images.length - 6;
        const newPosition = position + 6 < max ? position + 6 : max;
          virtuoso.current.scrollToIndex({
            index: newPosition,
            align: 'start',
            behavior: 'smooth',
          });
          props.handleClickDown(newPosition);
          return false;
        }} />
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeImage: PropTypes.number.isRequired,
  handleClickUp: PropTypes.func.isRequired,
  handleClickDown: PropTypes.func.isRequired,
  setActiveImage: PropTypes.func.isRequired,
};

export default Carousel;


