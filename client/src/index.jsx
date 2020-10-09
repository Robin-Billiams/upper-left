import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { upperLeft, inactive } from './styles.css';
import Image from './components/Image.jsx';
import Carousel from './components/Carousel.jsx';

class UpperLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [''],
      position: 4,
      currentImageIndex: 0,
    };
    this.fetch = this.fetch.bind(this);
    this.increasePosition = this.increasePosition.bind(this);
    this.decreasePosition = this.decreasePosition.bind(this);
    this.setActiveImage = this.setActiveImage.bind(this);
  }

  componentDidMount() {
    if (window.location.search) {
      this.fetch(window.location.search.slice(1));
    } else {
      this.fetch(0);
    }
  }

  setActiveImage(index) {
    this.setState({
      currentImageIndex: index,
    });
  }

  fetch(productId) {
    axios.get(`http://localhost:3003/products/${productId}`)
      .then((response) => {
        this.setState({
          images: response.data.imageUrls,
        });
      })
      .catch((error) => {
        console.log('There was an error: ', error);
      });
  }

  increasePosition(newPosition) {
    const { position, images } = this.state;
    const max = images.length - 6;
    // const newPosition = position + 6 < max ? position + 6 : max;
    this.setState({
      position: newPosition,
    });
    // scrollToComponent(document.getElementById(`image${newPosition}`), { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
    // document.getElementById(`image${newPosition}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (newPosition === max) {
      document.getElementById('downArrow').classList.add(inactive);
    }

    if (newPosition !== 0) {
      document.getElementById('upArrow').classList.remove(inactive);
    }
  }

  decreasePosition(newPosition) {
    const min = 0;
    const { position, images } = this.state;
    // const newPosition = position - 6 > min ? position - 6 : min;
    this.setState({
      position: newPosition,
    });
    // scrollToComponent(document.getElementById(`image${newPosition}`), { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
    // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    // document.getElementById(`image${newPosition}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // document.getElementsByTagName('body')[0].style.overflow = 'scroll';

    if (newPosition === 0) {
      document.getElementById('upArrow').classList.add(inactive);
    }

    if (newPosition !== images.length - 6) {
      document.getElementById('downArrow').classList.remove(inactive);
    }
  }

  render() {
    const { images, currentImageIndex, position } = this.state;
    return (
      <div className={upperLeft}>
        <Carousel images={images} position={position} activeImage={currentImageIndex} handleClickUp={this.decreasePosition} handleClickDown={this.increasePosition} setActiveImage={this.setActiveImage} />
        <Image image={images[currentImageIndex]} />
      </div>
    );
  }
}

ReactDOM.render(<UpperLeft />, document.getElementById('upperLeft'));
