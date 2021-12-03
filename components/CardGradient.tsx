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

interface Props {
   title: string;
   groupName: string;
   date: string;
   time: string;
   address: string;
   imageSource: { uri: string };
   iconDateTime: (arg: any) => void;
   iconAddress: (arg: any) => void;
}

export default function CardOverlay({
   title,
   groupName,
   date,
   time,
   address,
   iconDateTime,
   iconAddress,
   imageSource,
}: Props) {
   return (
      <TouchableOpacity style={[styles.container, defaultStyles.headerH1]}>
         <ImageBackground
            source={imageSource}
            resizeMode="cover"
            style={styles.image}>
            <LinearGradient
               colors={['#00000000', '#00000083', '#000000E6']}
               style={styles.background}
            />
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

               <View style={[styles.iconTextWrapper]}>
                  <View style={styles.icons}>{iconDateTime}</View>
                  <Text
                     style={[
                        defaultStyles.normalText,
                        defaultStyles.whiteText,
                        styles.datetimeText,
                     ]}>
                     {date} - {time}
                  </Text>
               </View>
               {/* TODO: truncate address */}
               <View style={[styles.iconTextWrapper]}>
                  <View style={styles.icons}>{iconAddress}</View>
                  <Text
                     style={[defaultStyles.whiteText, styles.addressText]}
                     numberOfLines={1}
                     ellipsizeMode="tail">
                     {address}
                  </Text>
               </View>
            </View>
         </ImageBackground>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      borderRadius: 5,
      height: 175,
      width: 337,
      paddingBottom: 5,
      marginVertical: 13,
      marginHorizontal: 20,
   },
   contentWrapper: {
      paddingHorizontal: 13,
      paddingTop: 64,
      zIndex: 999,
   },
   iconTextWrapper: {
      paddingBottom: 3,
      flexDirection: 'row',
      alignItems: 'center',
      // maxWidth: 280,
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
   icons: {
      marginRight: 5,
   },
   image: {
      flex: 1,
      justifyContent: 'center',
      height: '100%',
   },
   background: {
      borderRadius: 5,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      position: 'absolute',
      height: 174,
      top: 0,
      left: 0,
      right: 0,
   },
});
