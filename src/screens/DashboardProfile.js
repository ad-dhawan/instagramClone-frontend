import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

import { PRIMARY } from '../utils/colors';

const DashboardProfile = ({navigation, route}) => {
    const {followers, following} = useSelector((state) => state)
    const {username, avatar} = route.params;

    return(
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Ionicons
                    name="arrow-back-circle"
                    size={40}
                    color={PRIMARY}
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerUsername}>{username}</Text>
                <Entypo name="dots-three-vertical" size={30} color="black" />
            </View>
            <View style={styles.userDetailsContainer}>
                <View style={styles.upperUserDetails}>
                    <Image source={{uri: avatar}} style={styles.userPhoto} />
                    <View style={styles.upperDetailsItemContainer}>
                        <Text style={styles.upperDetailsBoldText}>0</Text>
                        <Text style={styles.upperDetailsStandardText}>Posts</Text>
                    </View>
                    <View style={styles.upperDetailsItemContainer}>
                        <Text style={styles.upperDetailsBoldText}>{followers.length}</Text>
                        <Text style={styles.upperDetailsStandardText}>Followers</Text>
                    </View>
                    <View style={styles.upperDetailsItemContainer}>
                        <Text style={styles.upperDetailsBoldText}>{following.length}</Text>
                        <Text style={styles.upperDetailsStandardText}>Followings</Text>
                    </View>
                </View>
                <View style={styles.lowerDetailsContainer}>
                    <Text style={{fontWeight: 'bold'}}>{username}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    userDetailsContainer: {
        padding: 15
    },
    upperUserDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userPhoto: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    upperDetailsItemContainer: {
        alignItems: 'center'
    },
    upperDetailsBoldText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    upperDetailsStandardText: {
        paddingTop: 5,
        fontSize: 14
    },
    lowerDetailsContainer: {
        paddingTop: 20
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headerUsername: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    }
});

export default DashboardProfile;