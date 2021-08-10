import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import {PRIMARY} from '../utils/colors';

const {width, height} = Dimensions.get('screen');

const DESIRED_RATIO = "16:9";

const Camera = ({navigation}) => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        const options = {
          quality: 0.5,
          base64: false,
        };
        const {uri} = await cameraRef.current.takePictureAsync(options);
        
        callback({
          uri,
          type: 'image/jpeg',
          fileName: uri.split('/').pop(),
        });
        navigation.goBack();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.cameraContainer}>
        <RNCamera style={styles.camera} ref={cameraRef} captureAudio={false} />
      </View>
      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <FontAwesome name="camera" color="white" size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    height: height - 200,
  },
  camera: {
    width: '100%',
    height: height - 200,
  },
  captureButton: {
      position: 'absolute',
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      left: width / 2
  },
});

export default Camera;