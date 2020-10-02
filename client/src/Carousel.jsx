import React from 'react';
import PropTypes from 'prop-types';
import CarouselImage from './CarouselImage.jsx';

const Carousel = (props) => {
  const { images, activeImage, position, handleClickUp, handleClickDown } = props;


  const carouselImages = []; //jsxArray

  images.slice(position, position + 6).forEach( (image, index) => {
    carouselImages.push(<CarouselImage isActive={activeImage === index} image={image} />);
  });

  return (
    <div id="carouselModule">
      <button onClick={props.handleClickUp}>Up</button>
      {carouselImages}
      <button onClick={props.handleClickDown}>Down</button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeImage: PropTypes.number.isRequired,
  handleClickUp: PropTypes.func.isRequired,
  handleClickDown: PropTypes.func.isRequired
};

export default Carousel;