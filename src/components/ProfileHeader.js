import React, {useRef} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'

const ProfileHeader = () => {
    const addPostRef = useRef();
    const menuRef = useRef();
    const dispatch = useDispatch();
    const {username} = useSelector((state) => state);

    const onLogout = () => {
        dispatch({
            type: 'LOGOUT'
        });
    }
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View>
                    <Text style={styles.usernameText}>{username}</Text>
                </View>
                <View style={styles.headerIcons}>
                    <Ionicons onPress={() => addPostRef.current.open()} style={styles.headerIcon} name="add-circle-outline" size={36} />
                    <Ionicons onPress={() => menuRef.current.open()} style={styles.headerIcon} name="ios-menu" size={36} />
                </View>


                <RBSheet
                    ref={addPostRef}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                    wrapper: {
                        backgroundColor: "#00000050"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                    }}
                >
                    <Text style={styles.bottomSheetHeading}>Create New</Text>
                    <View style={styles.bottomSheetItemContainer}>
                        <MaterialIcons name="grid-on" size={26} />
                        <Text style={styles.bottomSheetItemTitle}>Feed Post</Text>
                    </View>
                    <View style={styles.bottomSheetItemContainer}>
                        <Feather name="video" size={26} />
                        <Text style={styles.bottomSheetItemTitle}>Reel</Text>
                    </View>
                    <View style={styles.bottomSheetItemContainer}>
                        <Feather name="tv" size={26} />
                        <Text style={styles.bottomSheetItemTitle}>IGTV Video</Text>
                    </View>
                </RBSheet>

                <RBSheet
                    ref={menuRef}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                    wrapper: {
                        backgroundColor: "#00000050"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                    }}
                >
                    <View style={styles.bottomSheetItemContainer}>
                        <Feather name="settings" size={26} />
                        <Text style={styles.bottomSheetItemTitle}>Settings</Text>
                    </View>
                    <View style={styles.bottomSheetItemContainer}>
                        <Ionicons name="archive-outline" size={26} />
                        <Text style={styles.bottomSheetItemTitle}>Archive</Text>
                    </View>
                    <View style={styles.bottomSheetItemContainer}>
                        <Entypo name="stopwatch" size={26} />
                        <Text style={styles.bottomSheetItemTitle}>Your Activity</Text>
                    </View>
                    <TouchableOpacity onPress={onLogout} style={styles.bottomSheetItemContainer}>
                        <MaterialIcons name="logout" size={26} />
                        <Text style={styles.bottomSheetItemTitle}>Logout</Text>
                    </TouchableOpacity>
                </RBSheet>

            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    usernameText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerIcons: {
        flexDirection: 'row'
    },
    headerIcon: {
        paddingHorizontal: 5
    },
    bottomSheetHeading: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    bottomSheetItemContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomSheetItemTitle: {
        fontSize: 16,
        paddingLeft: 15
    }
})

export default ProfileHeader;