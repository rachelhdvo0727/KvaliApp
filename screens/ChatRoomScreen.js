import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { newMessage, fetchMessages } from '../store/actions/ChatActions';
import MessageObj from '../models/Message';

// Components
import {
   StyleSheet,
   TextInput,
   View,
   Button,
   Image,
   FlatList,
   Text,
} from 'react-native';
import Message from '../components/Message';

let moment = require('moment-timezone');
export default function ChatRoomScreen(props) {
   const dispatch = useDispatch();
   const roomId = props.route.params.id;

   const chatMessages = useSelector(state => state.chat.chatRooms).find(
      room => room.id === id,
   );
   const loggedInUser = useSelector(state => state.user.loggedInUser);
   console.log(loggedInUser);
   const [onChangeMsg, setOnChangeMsg] = React.useState('');
   const handleSend = () => {
      const message = new MessageObj('', onChangeMsg, new Date());
      dispatch(newMessage(roomId, message));
   };

   return (
      <View style={styles.view}>
         <FlatList
            data={chatMessages}
            keyExtractor={item => item.id}
            renderItem={item => (
               <Message
                  msgWrapperStyles={
                     roomId === item.receiver && styles.alignMsgBox
                  }
                  msgBoxStyles={roomId === item.user && styles.alignMsgBox}
                  textMsgBoxStyles={
                     item?.user
                        ? styles.sentMsgContainer
                        : styles.incomingMsgContainer
                  }
                  textMsgStyles={styles.sentMsgText}
                  text={item?.messageText}
                  timeStampText={moment(item?.timestamp).format('HH:mm')}
                  timeStampStyles={{
                     textAlign: item?.user ? 'right' : 'left',
                  }}
                  // receiverImage={
                  //   item.receiver === chatRoomId && (
                  //     <Image
                  //       style={styles.receiverImage}
                  //       source={require('../assets/cbs-surf/cbs-surf.png')}
                  //     />
                  //   )
                  // }
               />
            )}></FlatList>
         <View style={styles.inputView}>
            <TextInput
               style={styles.input}
               onChangeText={e => setOnChangeMsg(e)}
               value={onChangeMsg}
               placeholder=""
            />
            <Button title="Send" onPress={handleSend}></Button>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   view: {
      backgroundColor: '#fff',
      padding: 18,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'scroll',
   },
   alignMsgBox: {
      alignSelf: 'flex-end',
   },
   sentMsgText: {
      color: '#fff',
   },
   sentMsgContainer: {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 4,
      backgroundColor: '#5050A5',
   },
   senderImage: {
      width: 30,
      height: 30,
   },
   incomingMsgContainer: {
      backgroundColor: '#EEEEEE',
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 4,
      marginLeft: 10,
   },
   incomingMessageText: {
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 10,
   },
   timeStampStyles: {},
   embeddedLink: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'grey',
      backgroundColor: '#fff',
   },
   input: {
      flex: 1,
      height: 40,
      backgroundColor: 'lightgrey',
      marginLeft: 10,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginBottom: 10,
   },
   inputView: {
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 5,
   },
});
