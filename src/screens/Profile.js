import React, {useRef} from 'react';
import {Image, View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';

import ProfileHeader from '../components/ProfileHeader';

const {width, height} = Dimensions.get('screen');

const Profile = () => {

    return(
        <SafeAreaView>
            <ProfileHeader />
            <View style={styles.userDetailsContainer}>
                <View style={styles.upperUserDetails}>
                    <Image source={require('../assets/AD.jpeg')} style={styles.userPhoto} />
                    <View style={styles.upperDetailsItemContainer}>
                        <Text style={styles.upperDetailsBoldText}>12</Text>
                        <Text style={styles.upperDetailsStandardText}>Posts</Text>
                    </View>
                    <View style={styles.upperDetailsItemContainer}>
                        <Text style={styles.upperDetailsBoldText}>500</Text>
                        <Text style={styles.upperDetailsStandardText}>Followers</Text>
                    </View>
                    <View style={styles.upperDetailsItemContainer}>
                        <Text style={styles.upperDetailsBoldText}>400</Text>
                        <Text style={styles.upperDetailsStandardText}>Followings</Text>
                    </View>
                </View>
                <View style={styles.lowerDetailsContainer}>
                    <Text style={{fontWeight: 'bold'}}>AD</Text>
                </View>
            </View>
            <View style={styles.editProfileContainer}>
                <Text>Edit Profile</Text>
            </View>
        </SafeAreaView>
    )
}

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
    editProfileContainer: {
        width,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    }
})

export default Profile;