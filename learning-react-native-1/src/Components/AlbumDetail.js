import React from 'react';
import { Image, View, Text, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import CardMetadata from './CardMetadata';

import Button from './Button';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
	<CardMetadata album={album} />
      </CardSection>

      <CardSection>
	<Image
	  source={{ uri: album.image }}
	  style={ styles.imageStyle } />
      </CardSection>

      <CardSection>
	<Button onPress={() => Linking.openURL(album.url)}>
	  Buy Now
	</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
