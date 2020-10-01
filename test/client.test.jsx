import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Image from '../client/src/Image.jsx';

describe('dummy test to make sure jest is working', () => {
  test('checks if true is true', () => {
    expect(true).toBe(true);
  });
});

describe('dummy test to make sure enzyme is working', () => {
  test('checks if shallowly rendered html is retrieved using .html()', () => {
    const myImage = shallow(<div>test</div>);
    expect(myImage.html()).toEqual('<div>test</div>');
  });

});

describe('it should render the correct image', () => {
  test('should render a component of type Image', () => {
    const myImage = shallow(<Image productId={0} />);
    const instance = myImage.instance();
    expect(instance).toBeInstanceOf(Image);
  });

  test('should contain the first image', () => {
    const myImage = shallow(<Image productId={0} />);
    myImage.setState({ images: ['foo', 'bar'] });
    expect(myImage.html()).toEqual('<div><img src="foo" alt="main product" width="500" height="600"/></div>');
  });
});
