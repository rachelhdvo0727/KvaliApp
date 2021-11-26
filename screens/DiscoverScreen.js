import React from 'react';

import defaultStyles from '../styles/General';
// Components
import { StyleSheet, View } from 'react-native';
import CardOverlay from '../components/CardOverlay';
import SearchField from '../components/SearchField';

export default function DiscoverScreen() {
   return (
      <View style={[styles.align, defaultStyles.loggedInBackground]}>
         <SearchField placeholder="Search for events, posts and more"></SearchField>
         <CardOverlay
            title="All events"
            imageSource={require('../assets/discover/all-events-2x.png')}
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
         {/* <CardGradient
            title="Christmas with CBS Yoga"
            groupName="CBS Yoga"
            date="mon, 1st apr"
            time="15.00 - 18.00"
            iconDateTime={<Ionicons name="time-sharp" size={19} color="#fff" />}
            address="Dalgas Have, 2000 Frederiksberg"
            iconAddress={
               <Ionicons name="location-sharp" size={19} color="#fff" />
            }
            imageSource={require('../assets/discover-events-imgs/yoga-event.png')}></CardGradient> */}
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
