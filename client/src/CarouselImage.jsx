import React from 'react';
import PropTypes from 'prop-types';

//had to make this a class so I could
class CarouselImage extends React.Component {
  render() {
    const { image, isActive } = this.props;

    return (
      <div className="carouselImageBox" id={this.props.refProp}>
        <img className="thumbnail" src={image} alt="product thumbnail" />
      </div>

    );
  }

};

CarouselImage.propTypes = {
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  refProp: PropTypes.string.isRequired,
};

export default CarouselImage;
