import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { imageModule } from '../styles.css';

const StyledImage = styled.div((props) => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: `${props.zoom ? 'auto' : 'contain'}`,
  cursor: `${props.zoom ? 'zoom-out' : 'zoom-in'}`,
  backgroundRepeat: 'no-repeat',
  display: 'block',
  position: 'relative',
  backgroundPosition: `${props.zoom ? 100 * props.x : 0}% ${props.zoom ? 100 * props.y : 0}%`,
  height: '100%',
  width: '100%'
}));

const Image = (props) => {
  const { image } = props;
  const [mouseLocation, setMouseLocation] = useState({x: 0, y: 0});
  const [imagePosition, setImagePosition] = useState({x: 0, y: 0});
  const [imageDimensions, setImageDimensions] = useState({x: 0, y: 0});
  const [zoom, setZoom] = useState(false);
  const imageEl = React.useRef(null);

  useEffect(() => {
    setImagePosition({
      x: imageEl.current.parentNode.getBoundingClientRect().left,
      y: imageEl.current.parentNode.getBoundingClientRect().top
    });

    setImageDimensions({
      x: imageEl.current.getBoundingClientRect().width,
      y: imageEl.current.getBoundingClientRect().height
    });
  }, [zoom]);

  const handleClick = (event) => {
    setZoom(!zoom);
  };

  const handleMouseMove = (event) => {
    setMouseLocation({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className={imageModule}>
      <StyledImage
        zoom={zoom}
        image={image}
        x={(mouseLocation.x - imagePosition.x) / (imageDimensions.x)}
        y={(mouseLocation.y - imagePosition.y) / (imageDimensions.y)}
        ref={imageEl}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
