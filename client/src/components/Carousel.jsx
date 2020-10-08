import React from 'react';
import PropTypes from 'prop-types';
import { carouselModule, upArrow, downArrow, inactive, carouselContainer } from '../styles.css';


import CarouselImage from './CarouselImage.jsx';
const SRC_URL = 'https://hrr48madisonfecbrazil.s3-sa-east-1.amazonaws.com/';

const Carousel = (props) => {
  const { images, activeImage, position, handleClickUp, handleClickDown, setActiveImage } = props;
  const carouselImages = []; //jsxArray

  images.forEach((image, index) => {
    carouselImages.push(
      <CarouselImage isActive={activeImage === index} image={image} key={`image${index}`} setActiveImage={setActiveImage} index={index} />
    );
  });

  return (
    <div className={carouselModule}>
      <img id="upArrow" className={`${upArrow} ${inactive}`} src={SRC_URL + 'upArrow.png'} alt = "up Arrow" onClick={props.handleClickUp} />
      <div className={carouselContainer}>
        {carouselImages}
      </div>
      <img id="downArrow" className={downArrow} src={SRC_URL + 'downArrow.png'} alt = "down Arrow" onClick={props.handleClickDown} />
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