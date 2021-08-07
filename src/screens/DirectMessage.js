import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import { Caption } from 'react-native-paper';
import faker from 'faker';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {PRIMARY} from '../utils/colors'

const DirectMessage =  ({navigation}) => {
    const DATA = [];
    for(i=0; i<20; i++){
        DATA.push(
            {
                id: i,
                avatar: faker.image.avatar(),
                name: faker.name.firstName()
            }
        )
    }

    return(
        <SafeAreaView>
            <Ionicons
                name="arrow-back-circle"
                size={40}
                color={PRIMARY}
                style={styles.backIcon}
                onPress={() => navigation.goBack()}
            />

            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                return (
                    <View style={styles.singleDmContainer}>
                        <View style={styles.leftDetailsContainer}>
                            <Image source={{uri: item.avatar}} style={styles.avatarImage} />
                            <View style={styles.usernameContainer}>
                                <Text style={styles.username}>{item.name}</Text>
                                <Caption>Shared a post</Caption>
                            </View>
                        </View>
                        <Feather style={{paddingRight: 15}} name="camera" size={30} />
                    </View>
                );
                }}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    backIcon: {
        paddingTop: 8,
        paddingLeft: 8
    },
    singleDmContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftDetailsContainer: {
        flexDirection: 'row'
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    usernameContainer: {
        paddingLeft: 15,
        justifyContent: 'center',
    },
    username: {
        fontSize: 16,
        fontWeight: '500'
    },
})

export default DirectMessage;