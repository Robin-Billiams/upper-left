import React from 'react';
import PropTypes from 'prop-types';
import CarouselImage from './CarouselImage.jsx';
import upArrow from './assets/upArrow.png';
import downArrow from './assets/downArrow.png';

const Carousel = (props) => {
  const { images, activeImage, position, handleClickUp, handleClickDown } = props;


  const carouselImages = []; //jsxArray

  images.slice(position, position + 6).forEach( (image, index) => {
    carouselImages.push(<CarouselImage isActive={activeImage === index} image={image} />);
  });

  return (
    <div id="carouselModule">
      <img id="upArrow" class="inactive" src={upArrow} onClick={props.handleClickUp} />
      {/* <button onClick={props.handleClickUp}>Up</button> */}
      {carouselImages}
      <img id="downArrow" src={downArrow} onClick={props.handleClickDown} />
      {/* <button onClick={props.handleClickDown}>Down</button> */}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeImage: PropTypes.number.isRequired,
  handleClickUp: PropTypes.func.isRequired,
  handleClickDown: PropTypes.func.isRequired,
};

export default Carousel;