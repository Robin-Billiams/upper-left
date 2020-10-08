import React from 'react';
import PropTypes from 'prop-types';
import styles from '../upperLeftStyles.css';


const CarouselImage = (props) => {
  const { image, isActive, setActiveImage, index } = props;
  let className = styles.carouselImageBox;
  if (!isActive) {
    className += ` ${styles.inactive}`;
  }
  return (
    <div className={className} id={`image${index}`} onClick={()=> {setActiveImage(index)}}>
      <img className={styles.thumbnail} src={image} alt="product thumbnail" />
    </div>
  );
};

CarouselImage.propTypes = {
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  setActiveImage: PropTypes.func.isRequired,
};

export default CarouselImage;
