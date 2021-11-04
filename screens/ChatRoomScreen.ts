import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newMessage } from '../store/actions/ChatActions';
import { Messages, ChatRooms } from '../dummy-db/DummyData';
import MessageObj from '../models/Message';

import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Image,
  FlatList,
} from 'react-native';
import Message from '../components/Message';
import { RootState } from '../App';

let moment = require('moment-timezone');

export default function ChatRoomScreen(props: any) {
  const dispatch = useDispatch();
  const id = props.route.params.id;

  const loggedInUser = useSelector(
    (state: RootState) => state.user.loggedInUser,
  );
  const chatMessages = useSelector(
    (state: RootState) => state.chat.chatRooms,
  ).find((room: any) => room.chatRoomId === id).messages;

  const [onChangeMsg, setOnChangeMsg] = React.useState('');

  const handleSend = () => {
    console.log('value ' + onChangeMsg);
    const msg = new MessageObj('', onChangeMsg, new Date(), loggedInUser);
    dispatch(newMessage(id, msg));
  };
  return (
    <>
      <View style={styles.view}>
        <FlatList
          data={chatMessages}
          keyExtractor={item => item.messageId}
          renderItem={({ item }) => (
            <Message
              msgWrapperStyles={item.user.id === '1' && styles.alignMsgBox}
              msgBoxStyles={item.user.id === '1' && styles.alignMsgBox}
              textMsgBoxStyles={
                item.user.id === '1'
                  ? styles.sentMsgContainer
                  : styles.incomingMsgContainer
              }
              textMsgStyles={item.user.id === '1' && styles.sentMsgText}
              text={item.messageText}
              timeStampText={moment(item.messageTimestamp).format('HH:mm')}
              timeStampStyles={{
                textAlign: item.user.id === '1' ? 'right' : 'left',
              }}
              senderImage={
                item.user.id !== '1' && (
                  <Image
                    style={styles.senderImage}
                    source={require('../assets/cbs-surf/cbs-surf.png')}
                  />
                )
              }
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
    </>
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
