import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Footer', () => {
  it('should not have regressed', () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
