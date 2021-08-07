import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import Stories from '../components/Stories';
import DashboardFeed from '../components/DashboardFeed';

const Dashboard = () => {
    return(
        <SafeAreaView>
            <Stories />
            <DashboardFeed />
        </SafeAreaView>
    )
};

export default Dashboard;