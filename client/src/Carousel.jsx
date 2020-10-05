import React from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';


import CarouselImage from './CarouselImage.jsx';
import upArrow from './assets/upArrow.png';
import downArrow from './assets/downArrow.png';

const Carousel = (props) => {
  const { images, activeImage, position, handleClickUp, handleClickDown } = props;
  const carouselImages = []; //jsxArray

  images.forEach( (image, index) => {
    carouselImages.push(
      <CarouselImage isActive={activeImage === index} image={image} refProp={`image${index}`} />
    );
  });

  return (
    <div id="carouselModule">
      <img id="upArrow" className="inactive" src={upArrow} onClick={props.handleClickUp} />
      <div id="carouselContainer">
        {carouselImages}
      </div>
      <img id="downArrow" src={downArrow} onClick={props.handleClickDown} />
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