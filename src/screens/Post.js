import React from 'react';
import {View, Text, SafeAreaView, Dimensions, FlatList, StyleSheet, Image} from 'react-native';
import Video from 'react-native-video';
import faker from 'faker'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

import reel1 from '../assets/reel1.mp4'
import reel2 from '../assets/reel2.mp4'
import reel3 from '../assets/reel3.mp4'
import reel4 from '../assets/reel4.mp4'
import reel5 from '../assets/reel5.mp4'

const {width, height} = Dimensions.get('screen');

const Post = () => {

    const DATA = [
        {
            id: 1,
            video: reel1,
            username: faker.name.firstName(),
            avatar: faker.image.avatar(),
        },
        {
            id: 2,
            video: reel2,
            username: faker.name.firstName(),
            userImage: faker.image.avatar(),
        },
        {
            id: 3,
            video: reel3,
            username: faker.name.firstName(),
            userImage: faker.image.avatar(),
        },
        {
            id: 4,
            video: reel4,
            username: faker.name.firstName(),
            userImage: faker.image.avatar(),
        },
        {
            id: 5,
            video: reel5,
            username: faker.name.firstName(),
            userImage: faker.image.avatar(),
        },
    ];

    return(
        <>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                pagingEnabled
                renderItem={({item}) => {
                    return (
                        <View style={styles.mainContainer}>
                        <Video source={item.video} style={styles.video} audioOnly={false} playWhenInactive={false} playInBackground={false} repeat={true} />

                        <SafeAreaView style={styles.headerContainer}>
                            <Text style={styles.headingTitle}>Reels</Text>
                            <Entypo name="camera" size={32} color="white" style={styles.cameraIcon} />
                        </SafeAreaView>

                        <View style={styles.componentsContainer}>

                        <View style={styles.detailsContainer}>
                            <Image source={{uri: item.avatar}} style={styles.userAvatar} />
                            <Text style={styles.username}>{item.username}</Text>
                        </View>

                        <View>
                            <Feather name="heart" size={28} color="white" style={styles.icons} />
                            <FontAwesome name="comment-o" size={28} color="white" style={styles.icons} />
                            <Feather name="send" size={28} color="white" style={styles.icons} />
                            <Entypo name="dots-three-vertical" size={28} color="white" style={styles.icons} />

                        </View>

                        </View>
                    </View>
                    );
                }}
            />
        </>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height - 100
    },
    video: {
        flex: 1,
        height,
        width
    },
    componentsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width,
        paddingHorizontal: 20,
        bottom: 15
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    username: {
        color: 'white',
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    icons: {
        paddingTop: 32
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
    },
    headingTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
        paddingLeft: 20
    },
    cameraIcon: {
        paddingRight: 20
    }
})

export default Post;