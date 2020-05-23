import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };
  
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(results => this.setState({ albums: results.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
  }

  render() {
    return (
      <ScrollView>
	{this.renderAlbums()}
      </ScrollView>
    );
  };
};

export default AlbumList;
