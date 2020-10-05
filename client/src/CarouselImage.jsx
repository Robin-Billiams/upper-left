import React from 'react';
import PropTypes from 'prop-types';

const CarouselImage = (props) => {
  const { image, isActive } = props;

  return (
    <div className="carouselImageBox">
      <img className="thumbnail" src={image} alt="product thumbnail" />
    </div>

  );
};

CarouselImage.propTypes = {
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default CarouselImage;
