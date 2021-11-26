import React from 'react';
import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   ImageBackground,
} from 'react-native';

interface Props {
   title: string;
   imageSource: { uri: string };
   overlayColor: string;
   onPress(arg: any): void;
}

function SplashButton({ title, imageSource, overlayColor, onPress }: Props) {
   return (
      <TouchableOpacity onPress={onPress}>
         <View style={styles.container}>
            <ImageBackground
               source={imageSource}
               resizeMode="cover"
               style={styles.image}>
               <View style={[styles.background, overlayColor]}></View>
               <Text style={styles.buttonText}>{title}</Text>
            </ImageBackground>
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: 5,
      width: 337,
      height: 120,
      margin: 15,
   },
   image: { flex: 1, justifyContent: 'center', height: '100%', zIndex: 777 },
   background: {
      borderRadius: 5,
      position: 'absolute',
      height: 120,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 888,
      opacity: 0.8,
   },
   buttonText: {
      fontFamily: 'Teko-Medium',
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 26,
      textAlign: 'center',
      paddingTop: 5,
      zIndex: 999,
   },
});

export default SplashButton;
