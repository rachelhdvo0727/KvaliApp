import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
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
      <View style={[styles.container, defaultStyles.headerH1]}>
         <ImageBackground
            source={imageSource}
            resizeMode="cover"
            style={styles.image}>
            <LinearGradient
               colors={['#00000000', '#00000083', '#000000E6']}
               style={styles.background}
            />
            <View style={styles.contentWrapper}>
               <Text
                  style={[
                     styles.textWrapper,
                     styles.title,
                     defaultStyles.whiteText,
                  ]}>
                  {title}
               </Text>
               <Text
                  style={[
                     styles.textWrapper,
                     defaultStyles.whiteText,
                     defaultStyles.normalText,
                  ]}>
                  {groupName}
               </Text>

               <View style={[styles.textWrapper]}>
                  <View style={styles.icons}>{iconDateTime}</View>
                  <Text
                     style={[
                        defaultStyles.whiteText,
                        defaultStyles.normalText,
                        styles.datetimeText,
                     ]}>
                     {date} - {time}
                  </Text>
               </View>

               <View style={[styles.textWrapper]}>
                  <View style={styles.icons}>{iconAddress}</View>
                  <Text
                     style={[
                        defaultStyles.whiteText,
                        defaultStyles.normalText,
                     ]}>
                     {address}
                  </Text>
               </View>
            </View>
         </ImageBackground>
      </View>
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
      margin: 20,
   },
   contentWrapper: {
      paddingHorizontal: 13,
      paddingTop: 55,
      zIndex: 999,
   },
   title: {
      fontSize: 26,
      fontFamily: 'Teko-Medium',
   },
   textWrapper: {
      paddingBottom: 3,
      flexDirection: 'row',
      alignItems: 'center',
      fontFamily: 'OpenSans-Regular',
   },
   datetimeText: {
      textTransform: 'uppercase',
      fontFamily: 'OpenSans-Regular',
      fontWeight: '700',
   },
   icons: {
      marginRight: 5,
   },
   image: { flex: 1, justifyContent: 'center', height: '100%' },
   background: {
      borderRadius: 5,
      position: 'absolute',
      height: 174,
      top: 0,
      left: 0,
      right: 0,
   },
});
