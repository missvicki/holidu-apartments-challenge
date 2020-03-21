import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('Header Component', () => {
  it('should render correctly', () => {
    shallow(
      <Header />,
    );
  });
});
