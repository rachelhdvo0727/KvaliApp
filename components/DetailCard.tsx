import React from 'react';
import { StyleSheet, View } from 'react-native';
import defaultStyles from '../styles/General';

interface Props {
   childrenBefore: React.ReactNode;
   childrenAfter: React.ReactNode;
   textContent: React.ReactNode;
}

export default function DetailCard({
   childrenBefore,
   childrenAfter,
   textContent,
}: Props) {
   return (
      <View style={styles.cardContainer}>
         {childrenBefore}
         <View style={styles.contentText}>{textContent}</View>
         {childrenAfter}
      </View>
   );
}

const styles = StyleSheet.create({
   cardContainer: {
      ...defaultStyles.lightShadow,
      backgroundColor: '#fff',
      padding: 19,
      marginBottom: 25,

      justifyContent: 'space-between',
      alignItems: 'center',
   },
   contentText: {
      alignSelf: 'stretch',
   },
});
