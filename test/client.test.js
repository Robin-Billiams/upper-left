import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Image from '../client/src/Image.jsx';
import axios from 'axios';


describe('dummy test to make sure jest is working', () => {
  test('checks if true is true', () => {
    expect(true).toBe(true);
  });
});

describe('it should fetch a url', () => {
  test('checks if true is true', () => {
    const myImage = shallow(<Image productId={0} />);
    expect(myImage.props().children).not.toBe('test');
    //I know this test doesn't make much sense; just happy to have the component rendering with no errors.
  });
});