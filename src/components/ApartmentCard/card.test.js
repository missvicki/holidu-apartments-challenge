import React from 'react';
import { shallow } from 'enzyme';
import ApartmentCard from './index';

describe('Card', () => {
  it('should not have regressed', () => {
    const component = shallow(<ApartmentCard />);

    expect(component).toMatchSnapshot();
  });
});
