import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const { image } = props;

  return (
    <div id="imageModule">
      <img id="mainImage" src={image} alt="main product" />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
