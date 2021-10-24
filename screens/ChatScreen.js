import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  Button,
  TextInput,
} from 'react-native';
import defaultStyles from '../styles/General';
import ChatRoom from '../components/ChatRoom';
import {
  newChatRoom,
  deleteChatRoom,
  fetchChatRooms,
  fetchMessages,
} from '../store/actions/ChatActions';

let moment = require('moment-timezone');

export default function ChatScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    //Load chatRooms array from store
    dispatch(fetchChatRooms());
    // console.log('chatScreen', chatRooms);
  }, []);

  const chatRooms = useSelector(state => state.chat.chatRooms);

  const [text, onChangeText] = useState('');
  const handleCreate = () => {
    dispatch(newChatRoom(text));
  };
  const handleDelete = id => {
    // console.log('delete', id);
    dispatch(deleteChatRoom(id));
  };

  return (
    <SafeAreaView style={defaultStyles.pageCenter}>
      {/* <TextInput
        style={defaultStyles.input}
        value={text}
        onChangeText={onChangeText}
      />
      <Button title="Create New Room" onPress={handleCreate} /> */}

      <FlatList
        data={chatRooms}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <ChatRoom
              style={styles.image}
              onPress={() => {
                navigation.navigate('ChatRoomScreen', {
                  id: item.id,
                  name: item.chatRoomName,
                });
                dispatch(fetchMessages(item.id));
              }}
              titleText={item.chatRoomName}
              // bodyText={
              // 	item.messages.length > 0
              // 		? item.messages[item.messages.length - 1].messageText
              // 		: null
              // }
              children={
                <Image
                  source={
                    item?.chatRoomName === 'CBS Surf'
                      ? require('../assets/cbs-surf/cbs-surf.png')
                      : item?.chatRoomName === 'CBS Feminist Society'
                      ? require('../assets/cbs-fem/cbs-fem.png')
                      : item?.chatRoomName === 'CBS Students'
                      ? require('../assets/cbs-students/cbs-students.png')
                      : item?.chatRoomName === 'CBS Golf'
                      ? require('../assets/cbs-golf/cbs-golf.png')
                      : item?.chatRoomName === 'CBS Poker'
                      ? require('../assets/cbs-poker/cbs-poker.png')
                      : null
                  }
                />
              }
              timeStamp={props.timeStamp}
              // timeStamp={
              // 	item.messages.length > 0
              // 		? moment(
              // 				item.messages[item.messages.length - 1].messageTimestamp
              // 		  ).format("HH:mm")
              // 		: null
              // }
            ></ChatRoom>
            {/* <Button
              title="Delete"
              onPress={handleDelete.bind(this, item.id)}></Button> */}
          </>
        )}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

// const mapDispatchToProps = {
//   fetchChatRooms: () => dispatch(fetchChatRooms()),
// };

// const mapStateToProps = state => {
//   chatRooms: state.chat.chatRooms;
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
