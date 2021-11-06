import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Message = props => {
   return (
      <View style={[styles.wrapper, props.msgWrapperStyles]}>
         <View style={[styles.messageContainer, props.msgBoxStyles]}>
            {props.senderImage}
            <View style={[styles.textMsgContainer, props.textMsgBoxStyles]}>
               <Text style={[styles.textMsg, props.textMsgStyles]}>
                  {props.text}
               </Text>
            </View>
         </View>
         <Text style={[styles.timeStamp, props.timeStampStyles]}>
            {props.timeStampText}
         </Text>
      </View>
   );
};

// Styles
const styles = StyleSheet.create({
   wrapper: { marginVertical: 16 },
   messageContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
   },
   textMsgContainer: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      padding: 15,
   },
   textMsg: {
      fontSize: 14,
   },
   timeStamp: {
      // textAlign: "right",
      fontSize: 12,
      fontWeight: '300',
      color: '#707070',
   },
});

export default Message;
