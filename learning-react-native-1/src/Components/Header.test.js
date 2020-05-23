import React from 'react';
import Header from './Header';

import renderer from 'react-test-renderer';

describe('HeaderComponent', () => {
  it('renders as expected', () => {
    const rendered = renderer.create(<Header headerText={'Test'} />).toJSON();
    expect(rendered).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  });
});
