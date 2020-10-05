import React from 'react';
import PropTypes from 'prop-types';


const CarouselImage = (props) => {
  const { image, isActive } = props;
  let className = 'carouselImageBox';
  if (!props.isActive) {
    className += ' inactive';
  }
  return (
    <div className={className} id={props.refProp} >
      <img className="thumbnail" src={image} alt="product thumbnail" />
    </div>
  );
};

CarouselImage.propTypes = {
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  refProp: PropTypes.string.isRequired,
};

export default CarouselImage;
