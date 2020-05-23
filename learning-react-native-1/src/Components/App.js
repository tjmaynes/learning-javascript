import React, { Component } from 'react';
import { AppRegistry, SafeAreaView, Text, View } from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';

export default class App extends Component  {
  render() {
    return (
      <SafeAreaView style={styles.safeArea} forceInset={{'top': 'always'}}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </SafeAreaView>
    );
  }
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  }
};

AppRegistry.registerComponent('albums', () => App);
