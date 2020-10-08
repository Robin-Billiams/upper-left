import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from '../upperLeftStyles.css';

const Image = (props) => {
  const { image } = props;
  const [zoom, setZoom] = useState(false);

  const handleClick = (event) => {
    setZoom(!zoom);
  };

  const className = zoom ? styles.zoomedIn : styles.zoomedOut;

  return (
    <div className={styles.imageModule}>
      <img className={styles.mainImage} src={image} alt="main product" className={className} onClick={handleClick} />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
