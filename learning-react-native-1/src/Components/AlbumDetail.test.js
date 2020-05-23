import React from 'react';
import AlbumDetail from './AlbumDetail';

import renderer from 'react-test-renderer';

const albumStub = [
  {
    "title": "Taylor Swift",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
  }
];

describe('AlbumDetailComponent', () => {
  it('renders as expected', () => {
    const rendered = renderer.create(<AlbumDetail key={albumStub[0].title} album={albumStub[0]} />).toJSON();
    expect(rendered).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  });
});
