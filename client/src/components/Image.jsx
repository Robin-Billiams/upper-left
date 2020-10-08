import React, { useState } from "react";
import PropTypes from 'prop-types';
import { mainImage, imageModule, zoomedIn, zoomedOut } from '../styles.css';

const Image = (props) => {
  const { image } = props;
  const [zoom, setZoom] = useState(false);

  const handleClick = (event) => {
    setZoom(!zoom);
  };

  const className = zoom ? zoomedIn : zoomedOut;

  return (
    <div className={imageModule}>
      <img className={mainImage} src={image} alt="main product" className={className} onClick={handleClick} />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
