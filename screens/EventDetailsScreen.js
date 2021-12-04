import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import OutlinedButton from '../components/OutlinedButton';
import Button from '../components/Button';

const EventDetailsScreen = props => {
   const [isInterested, setIsInterested] = React.useState(false);
   const [isGoing, setIsGoing] = React.useState(false);

   const handleInterested = () => {
      setIsInterested(true);
   };
   const handleChangeStatus = () => {
      console.log('show slide-up list');
   };
   return (
      <View>
         {isGoing || isInterested ? (
            <Button
               title={isGoing ? 'Going' : 'Interested'}
               onPress={handleChangeStatus}
               icon={
                  isGoing ? (
                     <FontAwesome5
                        name="calendar-check"
                        size={16}
                        color="#fff"
                     />
                  ) : (
                     <AntDesign name="star" size={16} color="#fff" />
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
            <View View style={styles.btnContainer}>
               <OutlinedButton
                  title="Interested"
                  onPress={() => setIsInterested(true)}
                  icon={<AntDesign name="staro" size={16} color="#5050A5" />}
                  buttonStyle={styles.btnWidth}
               />
               <OutlinedButton
                  title="Going"
                  onPress={() => setIsGoing(true)}
                  icon={
                     <FontAwesome5
                        name="calendar-check"
                        size={16}
                        color="#5050A5"
                     />
                  }
                  buttonStyle={styles.btnWidth}
               />
            </View>
         )}
      </View>
   );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
   btnContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   btnWidth: {
      width: 160,
   },
   clsInterested: {
      width: 'auto',
      padding: 14,
   },
});
