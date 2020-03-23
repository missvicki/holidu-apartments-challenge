import React from 'react';
import { shallow } from 'enzyme';
import AvailableApartments from './index';

describe('Available', () => {
  it('should not have regressed', () => {
    const component = shallow(<AvailableApartments />);

    expect(component).toMatchSnapshot();
  });
});
