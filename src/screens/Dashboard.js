import React from 'react';
import {TouchableOpacity, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Stories from '../components/Stories';
import DashboardFeed from '../components/DashboardFeed';

const Dashboard = ({navigation}) => {
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate('DirectMessage')}>
                <Text style={styles.headingText}>Instagram Clone</Text>
                <Ionicons name="send" size={26} />
            </TouchableOpacity>
            <Stories />
            <DashboardFeed />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Dashboard;