import React from 'react';
import {Text, Image, View, StyleSheet, Dimensions, FlatList} from 'react-native';
import faker from 'faker';
import { Caption } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

import { PRIMARY, TEXT, BACKGROUND } from '../utils/colors';

const {width, height} = Dimensions.get('screen')

const DashboardFeed = () => {
    const DATA = [];
    for(i=0; i<15; i++){
        DATA.push({
            id: i,
            avatar: faker.internet.avatar(),
            username: faker.name.firstName(),
            location: faker.address.city(),
            image: faker.image.avatar(),
            likedUser: faker.name.firstName(),
            likedNumber: faker.datatype.number(),
            caption: faker.lorem.sentence()
        })
    }

    return(
        <View style={styles.mainContainer}>
            

            <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
            return (
                <View style={styles.singleFeedContainer}>
            <View style={styles.userDetailsContainer}>
                <Image source={{uri: item.avatar}} style={styles.avatarImage} />
                <View style={styles.nameAddressContainer}>
                    <Text style={styles.userName}>{item.username}</Text>
                    <Caption>{item.location}</Caption>
                </View>
            </View>
            <View style={styles.feedImageContainer}>
                <Image source={{uri: item.image}} style={styles.feedImage} />
            </View>
            <View style={styles.likeContainer}>
                <View style={styles.likeCommentShareContainer}>
                    <Feather name="heart" size={26} style={styles.likeIcon} />
                    <FontAwesome name="comment-o" size={26} style={styles.likeIcon} />
                    <FontAwesome name="send-o" size={26} style={styles.likeIcon} />
                </View>
                <View>
                    <Entypo name="tag" size={26} style={styles.likeIcon} />
                </View>
            </View>
            <Text style={styles.likedByText}>Liked by {item.likedUser} and {item.likedNumber} others</Text>
            <Text style={styles.caption}>
                <Text style={styles.captionUsername}>{item.username}</Text>{' '}
                {item.caption}</Text>
            </View>
            );
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
    },
    singleFeedContainer: {
        marginVertical: 10
    },
    userDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    avatarImage: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
        color: TEXT
    },
    nameAddressContainer: {
        paddingLeft: 15
    },
    feedImageContainer: {
        width,
        height: width,
        padding: 8
    },
    feedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10
    },
    likeContainer: {
        flexDirection: 'row',
        width,
        justifyContent: 'space-between'
    },
    likeCommentShareContainer: {
        flexDirection: 'row'
    },
    likeIcon: {
        paddingHorizontal: 10
    },
    likedByText: {
        fontWeight: 'bold',
        padding: 5
    },
    captionUsername: {
        fontWeight: 'bold',
    },
    caption: {
        padding: 5
    }
})

export default DashboardFeed;