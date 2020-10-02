import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const { image } = props;

  return (
    <div>
      <img src={image} alt="main product" width="500" height="600" />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
