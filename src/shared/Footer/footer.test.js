import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

describe('Footer Component', () => {
  it('should render correctly', () => {
    shallow(
      <Footer />,
    );
  });
});