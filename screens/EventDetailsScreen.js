import React from 'react';
import Participant from '../models/Participant';
import {
   StyleSheet,
   View,
   Text,
   ScrollView,
   SafeAreaView,
   Image,
   ImageBackground,
} from 'react-native';
import defaultStyles from '../styles/General';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
   addAttendance,
   deleteUserAttendance,
   editAttendanceStatus,
} from '../store/actions/EventActions';

// Components
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import OutlinedButton from '../components/OutlinedButton';
import Button from '../components/Button';
import DetailCard from '../components/DetailCard';
import IconTextContainer from '../components/IconTextContainer';
import PageButtonLink from '../components/PageButtonLink';
import BottomSheet from 'reanimated-bottom-sheet';
import IconButton from '../components/IconButton';
import ChatIcon from '../components/svgs/ChatIcon';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { Table, Row, Rows } from 'react-native-table-component';

const EventDetailsScreen = props => {
   const dispatch = useDispatch();
   let eventId = props.route.params.eventId;
   // let eventAttendances = props?.route?.params?.eventAttendances;

   const currentUser = useSelector(state => state?.user?.loggedInUser);
   const eventDetails = useSelector(state => state?.event?.events).find(
      event => event?.id === eventId,
   );
   const attendances = eventDetails.attendances;
   // const attendance = useSelector(state => state?.event);
   // Find current user's status on this event
   const usersEventStatus = attendances.find(
      stt => stt.userId === currentUser?.id,
   );
   const buttonStatus = React.useRef(null);

   const [userStatus, setUserStatus] = React.useState('');
   React.useState(() => {
      if (usersEventStatus) {
         setUserStatus(usersEventStatus?.status);
      }
   }, []);

   // console.log(attendance);

   const handleChangeStatus = status => {
      setUserStatus(status);
      dispatch(addAttendance(eventId, currentUser?.id, status));
   };

   // BottomSheet
   const sheetRef = React.useRef(null);
   const [isPanelActive, setIsPanelActive] = React.useState(false);
   const openPanel = () => {
      setIsPanelActive(!isPanelActive);
   };
   const changeCurrentStatus = userStatus => {
      if (userStatus !== 'notGoing') {
         // Change status
         setUserStatus(userStatus);
         dispatch(
            editAttendanceStatus(
               eventId,
               usersEventStatus?.attendanceId,
               userStatus,
            ),
         );
      } else {
         // Erase user's attendance
         setUserStatus('');
         dispatch(
            deleteUserAttendance(eventId, usersEventStatus?.attendanceId),
         );
      }
   };
   // Inside Bottomsheet
   const renderContent = () => (
      <View
         style={{
            backgroundColor: 'white',
            padding: 16,
            height: 450,
            zIndex: 9999,
         }}>
         <RadioButton.Group
            onValueChange={userStatus => changeCurrentStatus(userStatus)}
            value={userStatus}>
            <RadioButton.Item label="Interested" value="interested" />
            <RadioButton.Item label="Going" value="going" />
            <RadioButton.Item label="Not Going" value="notGoing" />
         </RadioButton.Group>
         <RadioButton value="Not going" />
      </View>
   );

   const [truncateText, setTruncateText] = React.useState(false);
   const toggleShowText = () => {
      setTruncateText(!truncateText);
   };
   const dateTimeOptions = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
   };

   const imageLinks =
      (eventDetails?.imageName === 'social-res-event' &&
         require('../assets/discover-events-imgs/social-res-event.png')) ||
      (eventDetails?.imageName === 'cbs-film-ghost' &&
         require('../assets/discover-events-imgs/cbs-film-ghost.png')) ||
      (eventDetails?.imageName === 'dansic-bootcamp' &&
         require('../assets/discover-events-imgs/dansic-bootcamp.png')) ||
      (eventDetails?.imageName === 'cbs-art-event' &&
         require('../assets/discover-events-imgs/cbs-art-event.png')) ||
      (eventDetails?.imageName === 'cbs-yoga-event' &&
         require('../assets/discover-events-imgs/cbs-yoga-event.png')) ||
      (eventDetails?.imageName === 'cbs-surf' &&
         require('../assets/discover-events-imgs/cbs-surf.png')) ||
      (eventDetails?.imageName === 'cbs-film-oldboy' &&
         require('../assets/discover-events-imgs/cbs-film-oldboy.png'));

   return (
      <SafeAreaView style={{ flex: 1 }}>
         {isPanelActive && (
            <>
               <BottomSheet
                  ref={sheetRef}
                  snapPoints={[300, 0]}
                  borderRadius={10}
                  renderContent={renderContent}
               />
            </>
         )}
         <ScrollView>
            <ImageBackground
               style={{ width: '100%', height: 164 }}
               source={imageLinks}
               resizeMode="cover"
            />
            <DetailCard
               childrenBefore={
                  <View style={{ alignSelf: 'stretch' }}>
                     <Text style={styles.header}>
                        {eventDetails?.eventTitle}
                     </Text>
                     <IconTextContainer
                        icon={
                           <Ionicons
                              name="time-sharp"
                              size={18}
                              color="#32305D"
                           />
                        }
                        text={`${new Date(
                           eventDetails?.dateTime?.start,
                        ).toLocaleDateString(
                           'en-UK',
                           dateTimeOptions,
                        )} - ${new Date(
                           eventDetails?.dateTime?.end,
                        ).toLocaleDateString('en-UK', dateTimeOptions)}`}
                        textStyle={styles.datetimeText}
                        containerStyle={{ marginBottom: 7 }}
                     />
                     <IconTextContainer
                        icon={
                           <Ionicons
                              name="location-sharp"
                              size={18}
                              color="#32305D"
                           />
                        }
                        text={
                           eventDetails?.venue
                              ? eventDetails?.venue +
                                ' ' +
                                eventDetails?.address
                              : eventDetails?.address
                        }
                        textStyle={styles.addressText}
                        containerStyle={{ marginBottom: 7 }}
                     />
                     <PageButtonLink
                        title={eventDetails?.group}
                        helpText="View page"
                        startIcon={
                           <Image
                              source={require('../assets/cbs-students/cbs-students.png')}
                              style={{ width: 34, height: 36 }}
                           />
                        }
                        endIcon={<IconButton icon={<ChatIcon fill="#fff" />} />}
                     />
                  </View>
               }
               childrenAfter={
                  <>
                     {usersEventStatus || userStatus ? (
                        <Button
                           title={
                              userStatus.charAt(0).toUpperCase() +
                              userStatus.slice(1)
                           }
                           onPress={openPanel}
                           icon={
                              userStatus === 'going' ? (
                                 <FontAwesome5
                                    name="calendar-check"
                                    size={16}
                                    color="#fff"
                                 />
                              ) : (
                                 <AntDesign
                                    name="star"
                                    size={16}
                                    color="#fff"
                                 />
                              )
                           }
                           buttonStyle={styles.clsInterested}
                           secondaryIcon={
                              <MaterialIcons
                                 name="keyboard-arrow-down"
                                 size={20}
                                 color="#fff"
                              />
                           }
                        />
                     ) : (
                        <View style={styles.btnContainer}>
                           <OutlinedButton
                              title="Interested"
                              onPress={() => {
                                 handleChangeStatus('interested');
                              }}
                              buttonStatus={buttonStatus}
                              icon={
                                 <AntDesign
                                    name="staro"
                                    size={17}
                                    color="#5050A5"
                                 />
                              }
                              buttonStyle={styles.btnWidth}
                           />
                           <OutlinedButton
                              title="Going"
                              onPress={() => {
                                 handleChangeStatus('going');
                              }}
                              icon={
                                 <FontAwesome5
                                    name="calendar-check"
                                    size={17}
                                    color="#5050A5"
                                 />
                              }
                              buttonStyle={styles.btnWidth}
                           />
                        </View>
                     )}
                     <View
                        style={{
                           flexDirection: 'row',
                           marginVertical: 20,
                        }}>
                        <View
                           style={{
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                           }}>
                           <AntDesign
                              name="star"
                              size={16}
                              color="#333333"
                              style={{ marginRight: 5 }}
                           />
                           <Text style={styles.statusText}>Interested</Text>
                        </View>
                        <Ionicons
                           name="ios-ellipse"
                           size={5}
                           color="black"
                           style={{ margin: 5 }}
                        />
                        <View
                           style={{
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                           }}>
                           <FontAwesome5
                              name="calendar-check"
                              size={16}
                              color="#333333"
                              style={{ marginRight: 5 }}
                           />
                           <Text style={styles.statusText}>35 Going</Text>
                        </View>
                     </View>
                  </>
               }></DetailCard>
            {/* Middle */}
            <DetailCard
               textContent={
                  <Text
                     numberOfLines={!truncateText ? 7 : undefined}
                     ellipsizeMode={!truncateText ? 'tail' : undefined}
                     style={{ fontSize: 14, paddingVertical: 10 }}>
                     {eventDetails?.eventDesc}
                  </Text>
               }
               childrenAfter={
                  <Text
                     style={styles.truncateTextButton}
                     onPress={toggleShowText}>
                     {!truncateText ? 'Show More' : 'Show Less'}
                  </Text>
               }
            />
            {/* Bottom */}
            {eventDetails?.schedule && (
               <DetailCard
                  childrenBefore={<Text style={styles.header}>SCHEDULE</Text>}
                  textContent={
                     <View>
                        {eventDetails?.schedule.map((activity, i) => (
                           <View key={i} style={styles.scheduleContainer}>
                              <Text style={styles.scheduleText}>
                                 {activity?.time}
                              </Text>
                              <Text style={styles.scheduleText}>
                                 {activity?.activity}
                              </Text>
                           </View>
                        ))}
                     </View>
                  }
               />
            )}
         </ScrollView>
      </SafeAreaView>
   );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
   btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignContent: 'flex-start',
      marginVertical: 10,
   },
   btnWidth: {
      width: 160,
      marginHorizontal: 10,
   },
   clsInterested: {
      alignSelf: 'stretch',
      padding: 14,
   },
   iconTextWrapper: {
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
   },
   // Texts
   header: {
      ...defaultStyles.headerH1,
      alignSelf: 'flex-start',
      color: '#32305D',
      marginBottom: 10,
   },
   datetimeText: {
      ...defaultStyles.normalText,
      alignSelf: 'flex-start',
      fontSize: 16,
      textTransform: 'uppercase',
      fontFamily: 'OpenSans-Bold',
   },
   addressText: {
      ...defaultStyles.normalText,
      alignSelf: 'flex-start',
      fontSize: 16,
   },
   truncateTextButton: {
      ...defaultStyles.btnLink,
      marginTop: 10,
   },
   statusText: {
      color: '#333333',
      fontFamily: 'OpenSans-Bold',
   },
   scheduleContainer: {
      flexDirection: 'row',
      paddingVertical: 5,
      borderBottomColor: '#AAAAAA',
      borderBottomWidth: 0.5,
      paddingHorizontal: 30,
      paddingVertical: 10,
   },
   scheduleText: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 14,
      padding: 5,
   },
   overlay: {
      flex: 1,
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.5,
      backgroundColor: 'black',
      width: 500,
   },
});
