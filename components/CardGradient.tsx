import React from 'react';
import {
   StyleSheet,
   View,
   TouchableOpacity,
   Text,
   ImageBackground,
} from 'react-native';
import defaultStyles from '../styles/General';
import { LinearGradient } from 'expo-linear-gradient';
import IconTextContainer from '../components/IconTextContainer';
import EventStatusTag from './svgs/EventStatusTag';

interface Props {
   title: string;
   groupName: string;
   start: string;
   end: string;
   address: string;
   imageSource: { uri: string };
   isTagStatus: boolean;
   iconDateTime: (arg: any) => void;
   iconAddress: (arg: any) => void;
   onPress: (arg: any) => void;
}

export default function CardOverlay({
   title,
   groupName,
   start,
   end,
   address,
   isTagStatus,
   iconDateTime,
   iconAddress,
   imageSource,
   onPress,
}: Props) {
   return (
      <TouchableOpacity onPress={onPress}>
         <View style={styles.container}>
            <ImageBackground
               source={imageSource}
               resizeMode="cover"
               style={styles.image}>
               <LinearGradient
                  colors={['#00000000', '#00000083', '#000000E6']}
                  style={styles.background}
               />
               {/* {isTagStatus && <EventStatusTag style={styles.tag} />} */}
               <View style={styles.contentWrapper}>
                  <View style={[styles.titleWrapper]}>
                     <Text style={[styles.title, defaultStyles.whiteText]}>
                        {title}
                     </Text>
                     <Text
                        style={[
                           defaultStyles.whiteText,
                           defaultStyles.normalText,
                           styles.groupName,
                        ]}>
                        {groupName}
                     </Text>
                  </View>
                  <IconTextContainer
                     icon={iconDateTime}
                     text={`${start} - ${end}`}
                     textStyle={[defaultStyles.whiteText, styles.datetimeText]}
                  />
                  <IconTextContainer
                     icon={iconAddress}
                     text={address}
                     numberOfLines={1}
                     ellipsizeMode="tail"
                     textStyle={[defaultStyles.whiteText, styles.addressText]}
                  />
               </View>
            </ImageBackground>
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: 175,
      width: 337,
      borderRadius: 5,
      paddingBottom: 5,
      marginVertical: 13,
      marginHorizontal: 25,
   },
   contentWrapper: {
      paddingHorizontal: 13,
      paddingTop: 64,
      zIndex: 999,
   },
   tag: { alignSelf: 'flex-end', position: 'absolute', top: 0, right: 10 },
   statusIcon: {
      alignSelf: 'flex-end',
      position: 'absolute',
      top: 8,
      right: 18,
   },
   titleWrapper: {
      paddingBottom: 3,
      flexDirection: 'column',
   },
   title: {
      fontSize: 26,
      fontFamily: 'Teko-Medium',
   },
   groupName: { fontFamily: 'OpenSans-Bold' },
   datetimeText: {
      textTransform: 'uppercase',
      fontFamily: 'OpenSans-Bold',
   },
   addressText: {
      ...defaultStyles.normalText,
      flex: 1,
   },
   image: {
      borderRadius: 5,
      flex: 1,
      justifyContent: 'center',
      height: '100%',
   },
   background: {
      borderRadius: 5,
      position: 'absolute',
      height: 174,
      top: 0,
      left: 0,
      right: 0,
   },
});
