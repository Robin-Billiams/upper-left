import React from 'react';
import axios from 'axios';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 11,
      images: []
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    axios.get(`/products/${this.state.productId}`)
      .then((response) => {
        this.setState({
          images: response.data.imageUrls
        })
      })
      .catch((error) => {
        console.log('There was an error: ', error);
      });
  }

  render() {
    return(
      <div>
        <img src={this.state.images[0]} width="500" height="600" />
      </div>
    );
  }
}

export default Image;