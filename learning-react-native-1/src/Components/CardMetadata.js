import React from 'react';
import { Text, View, Image } from 'react-native';

const CardMetadata = ({ album }) => {
  const {
    contentContainerStyle,
    thumbnailContainerStyle,
    contentStyle,
    contentTextStyle,
    thumbnailStyle
  } = styles;

  const {
    thumbnail_image,
    title,
    artist
  } = album;

  return (
    <View style={contentContainerStyle}>
      <View style={thumbnailContainerStyle}>
	<Image
	  source={{ uri: thumbnail_image }}
	  style={ thumbnailStyle } />
      </View>
      <View style={contentStyle}>
	<Text style={contentTextStyle}>{title}</Text>
	<Text>{artist}</Text>
      </View>
    </View>
  );
};


const styles = {
  contentContainerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  contentTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default CardMetadata;
