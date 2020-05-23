import React from 'react';
import AlbumList from './AlbumList';

import renderer from 'react-test-renderer';

describe('AlbumListComponent', () => {
  it('renders as expected', () => {
    const rendered = renderer.create(<AlbumList />).toJSON();
    expect(rendered).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  });
});
