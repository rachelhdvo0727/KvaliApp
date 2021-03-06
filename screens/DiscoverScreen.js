import React from 'react';
import defaultStyles from '../styles/General';
import { useNavigation } from '@react-navigation/core';
// Components
import { StyleSheet, View } from 'react-native';
import CardOverlay from '../components/CardOverlay';
import SearchField from '../components/SearchField';

export default function DiscoverScreen() {
   const navigation = useNavigation();
   return (
      <View style={[styles.align, defaultStyles.loggedInBackground]}>
         <SearchField placeholder="Search for events, posts and more"></SearchField>
         <CardOverlay
            title="All events"
            imageSource={require('../assets/discover/all-events-2x.png')}
            onPress={() => navigation.navigate('EventsScreen')}
            overlayColor={{
               backgroundColor: '#700F6E',
            }}></CardOverlay>
         <CardOverlay
            title="All Student Organisations"
            imageSource={require('../assets/discover/all-events-2x.png')}
            overlayColor={{
               backgroundColor: '#32305D',
            }}></CardOverlay>
         <CardOverlay
            title="All Posts"
            imageSource={require('../assets/discover/all-events-2x.png')}
            overlayColor={{
               backgroundColor: '#07936B',
            }}></CardOverlay>
      </View>
   );
}

const styles = StyleSheet.create({
   align: {
      ...defaultStyles.pageCenter,
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
});
