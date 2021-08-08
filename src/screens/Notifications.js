import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import faker from 'faker'

const {width, height} = Dimensions.get('screen');

const Notifications = () => {
    return(
        <SafeAreaView>
            <Text style={styles.headingText}>Activity</Text>
            <View style={styles.followedByContainer}>
                <View style={styles.singleElementContainer}>
                    <Image source={{uri: faker.image.avatar()}} style={styles.avatarImage} />
                    <Image source={{uri: faker.image.avatar()}} style={[styles.avatarImage, styles.secondAvatarImage]} />
                </View>
                <View style={styles.singleElementContainer}>
                    <Text>
                    <Text style={styles.likedUsername}>{faker.name.firstName()}</Text>,
                    <Text style={styles.likedUsername}> {faker.name.firstName()} </Text>and
                    <Text style={styles.likedUsername}> {faker.datatype.number()} others </Text>
                    started following you.
                    </Text>
                </View>
            </View>

            <View style={styles.followedByContainer}>
                <View style={styles.singleElementContainer}>
                    <Image source={{uri: faker.image.avatar()}} style={styles.avatarImage} />
                    <Image source={{uri: faker.image.avatar()}} style={[styles.avatarImage, styles.secondAvatarImage]} />
                </View>
                <View style={styles.singleElementContainer}>
                    <Text>
                    <Text style={styles.likedUsername}>{faker.name.firstName()}</Text>,
                    <Text style={styles.likedUsername}> {faker.name.firstName()} </Text>and
                    <Text style={styles.likedUsername}> {faker.datatype.number()} others </Text>
                    liked your photo.
                    </Text>
                </View>
                <View style={styles.singleElementContainer}>
                    <Image source={require('../assets/AD.jpeg')} style={styles.userImage} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    followedByContainer: {
        flexDirection: 'row',
        height: 80,
        width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    secondAvatarImage: {
        position: 'absolute',
        top: 15,
        left: 15
    },
    singleElementContainer: {
        paddingHorizontal: 10
    },
    likedUsername: {
        fontWeight: 'bold'
    },
    userImage: {
        width: 50,
        height: 50
    }
})

export default Notifications;