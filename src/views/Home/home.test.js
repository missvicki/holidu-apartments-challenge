import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

describe('Home Component', () => {
  it('should render correctly', () => {
    shallow(
      <Home />,
    );
  });
});
