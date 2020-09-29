import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Image extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>This is from react</h1>
      </div>
    );
  }
}

ReactDOM.render(<Image />, document.getElementById('app'));