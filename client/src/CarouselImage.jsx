import React from 'react';
import PropTypes from 'prop-types';


const CarouselImage = (props) => {
  const { image, isActive, refProp, setActiveImage, index } = props;
  let className = 'carouselImageBox';
  if (!isActive) {
    className += ' inactive';
  }
  return (
    <div className={className} id={refProp} onClick={()=> {setActiveImage(index)}}>
      <img className="thumbnail" src={image} alt="product thumbnail" />
    </div>
  );
};

CarouselImage.propTypes = {
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  refProp: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setActiveImage: PropTypes.func.isRequired,
};

export default CarouselImage;
