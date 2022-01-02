import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/actions/EventActions';

import { useNavigation } from '@react-navigation/core';

import { StyleSheet, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardGradient from '../components/CardGradient';

export default function EventsScreen() {
   const navigation = useNavigation();
   const dispatch = useDispatch();
   React.useEffect(() => {
      dispatch(fetchEvents());
   }, []);
   const events = useSelector(state => state?.event?.events);
   const [userStatus, setUserStatus] = React.useState('');

   const dateTimeOptions = {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
   };
   const entTimeOptions = {
      hour: 'numeric',
      minute: 'numeric',
   };

   return (
      <View style={styles.container}>
         <View style={{ flex: 1 }}>
            <FlatList
               data={events}
               keyExtractor={item => item.id}
               renderItem={({ item }) => (
                  <CardGradient
                     title={item?.eventTitle}
                     groupName={item?.group}
                     iconAddress={
                        <Ionicons
                           name="location-sharp"
                           size={16}
                           color="#fff"
                        />
                     }
                     iconDateTime={
                        <Ionicons name="time-sharp" size={16} color="#fff" />
                     }
                     start={new Date(item?.dateTime?.start).toLocaleDateString(
                        'en-UK',
                        dateTimeOptions,
                     )}
                     end={new Date(item?.dateTime?.end).toLocaleTimeString(
                        'en-UK',
                        entTimeOptions,
                     )}
                     address={item?.venue + item?.address}
                     imageSource={
                        (item?.imageName === 'social-res-event' &&
                           require('../assets/discover-events-imgs/social-res-event.png')) ||
                        (item?.imageName === 'cbs-film-ghost' &&
                           require('../assets/discover-events-imgs/cbs-film-ghost.png')) ||
                        (item?.imageName === 'dansic-bootcamp' &&
                           require('../assets/discover-events-imgs/dansic-bootcamp.png')) ||
                        (item?.imageName === 'cbs-art-event' &&
                           require('../assets/discover-events-imgs/cbs-art-event.png')) ||
                        (item?.imageName === 'cbs-yoga-event' &&
                           require('../assets/discover-events-imgs/cbs-yoga-event.png')) ||
                        (item?.imageName === 'cbs-surf' &&
                           require('../assets/discover-events-imgs/cbs-surf.png')) ||
                        (item?.imageName === 'cbs-film-oldboy' &&
                           require('../assets/discover-events-imgs/cbs-film-oldboy.png'))
                     }
                     onPress={() =>
                        navigation.navigate('EventDetailsScreen', {
                           eventId: item?.id,
                           eventTitle: item?.eventTitle,
                           eventAttendances: item?.attendances,
                        })
                     }
                  />
               )}></FlatList>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 10,
   },
});
