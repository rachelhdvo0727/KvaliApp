import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import defaultStyles from '../styles/General';

interface Props {
   text: string;
   icon: React.ReactNode;
   numberOfLines?: any;
   ellipsizeMode?: any;
   containerStyle?: any;
   textStyle?: any;
}
const IconTextContainer = ({
   text,
   icon,
   numberOfLines,
   ellipsizeMode,
   containerStyle,
   textStyle,
}: Props) => {
   return (
      <View style={[styles.container, containerStyle]}>
         <View style={styles.icon}>{icon}</View>
         <Text
            style={textStyle}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}>
            {text}
         </Text>
      </View>
   );
};

export default IconTextContainer;

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 4,
   },
   icon: {
      marginRight: 15,
   },
   text: {
      ...defaultStyles.normalText,
      flex: 1,
   },
});
