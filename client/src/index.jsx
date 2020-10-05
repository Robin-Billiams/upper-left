import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';
import Image from './Image.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 0,
      images: [],
      position: 4,
      currentImageIndex: 0,
    };
    this.fetch = this.fetch.bind(this);
    this.increasePosition = this.increasePosition.bind(this);
    this.decreasePosition = this.decreasePosition.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const { productId } = this.state;
    axios.get(`/products/${productId}`)
      .then((response) => {
        this.setState({
          images: response.data.imageUrls,
        });
      })
      .catch((error) => {
        console.log('There was an error: ', error);
      });
  }

  increasePosition() {
    const { position, images } = this.state;
    const max = images.length - 6;
    this.setState({
      position: position + 6 < max ? position + 6 : max,
    });
    document.getElementById(`image${position + 6 < max ? position + 6 : max}`).scrollIntoView({ behavior: 'smooth'});
  }

  decreasePosition() {
    const min = 0;
    const { position, images } = this.state;
    this.setState({
      position: position - 6 > min ? position - 6 : min,
    });
    document.getElementById(`image${position - 6 > min ? position - 6 : min}`).scrollIntoView({ behavior: 'smooth'});
  }

  render() {
    const { images, currentImageIndex, position } = this.state;
    return (
      <div id="mainApp">
        <Carousel images={images} position={position} activeImage={currentImageIndex} handleClickUp={this.decreasePosition} handleClickDown={this.increasePosition} />
        <Image image={images[currentImageIndex]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
