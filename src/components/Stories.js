import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions, FlatList} from 'react-native';
import faker from 'faker';

import {PRIMARY, TEXT, WHITE_TEXT} from '../utils/colors'

const {width, height} = Dimensions.get('screen');

const Stories = () => {
    const DATA = [];
    for(i=0; i<15; i++){
        DATA.push({
            id: i,
            name: faker.name.firstName(),
            image: faker.image.avatar(),
        })
    }

    return(
        <>
        <View style={styles.mainContainer}>

        <View style={styles.singleStoryContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/AD.jpeg')} style={styles.image} />
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>+</Text>
                </View>
            </View>
            <Text style={styles.name}>Your Story</Text>
        </View>

        <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.singleStoryContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: item.image}} style={styles.image} />
                </View>
                <Text style={styles.name}>{item.name}</Text>
            </View>
          );
        }}
      />
        </View>
        </>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        width,
        flexDirection: 'row'
    },
    singleStoryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        padding: 4,
        borderColor: PRIMARY,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        paddingVertical: 4,
        color: TEXT,
    },
    badgeContainer:{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    badgeText: {
        color: WHITE_TEXT,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Stories;