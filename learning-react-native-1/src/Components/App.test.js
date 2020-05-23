import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

describe('AppComponent', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  });
});
