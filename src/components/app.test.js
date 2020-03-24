import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('should show welcome message', function () {
    const component = shallow(<App />);
    expect(component.text().includes('Welcome to apartments')).toBe(true)
  });
});
