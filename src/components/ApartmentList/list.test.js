import React from 'react';
import { shallow } from 'enzyme';
import ApartmentList from './index';

describe('List', () => {
  it('should not have regressed', () => {
    const component = shallow(<ApartmentList />);

    expect(component).toMatchSnapshot();
  });
});
