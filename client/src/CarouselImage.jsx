import React from 'react';
import PropTypes from 'prop-types';

const CarouselImage = (props) => {
  const { image, isActive } = props;

  return (
    <img src={image} alt="product thumbnail" />
  );
};

CarouselImage.propTypes = {
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default CarouselImage;
