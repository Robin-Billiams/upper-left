import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Image from '../client/src/Image.jsx';
import axios from 'axios';


describe('dummy test to make sure jest is working', () => {
  test('checks if true is true', () => {
    expect(true).toBe(true);
  });
});

describe('dummy test to make sure enzyme is working', () => {
  test('checks if shallowly rendered html is retrieved using .html()', () => {
    const myImage = shallow(<div></div>);
    expect(myImage.html()).to.equal(<div></div>);
  });
});

describe('it should fetch a url', () => {
  test('checks if contains img tag', () => {
    const myImage = shallow(<Image productId={0} />);
    expect(myImage.html()).to.equal(
      <div>
        <img src="https://hrr48madisonfecbrazil.s3-sa-east-1.amazonaws.com/0.jpg" width="500" height="600" />
      </div>
    );
  });
});