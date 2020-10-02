import React from 'react';
import PropTypes from 'prop-types';

const CarouselImage = (props) => {
  const { image, isActive } = props;

  return (
    <div>
      <img src={image} alt="main product" width="100" height="100" />
    </div>
  );
};

CarouselImage.propTypes = {
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default CarouselImage;
