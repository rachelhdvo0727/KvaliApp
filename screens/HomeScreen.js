import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../store/actions/UserActions';
import defaultStyles from '../styles/General';

export default function HomeScreen(props) {
  const dispatch = useDispatch();

  return (
    <View style={defaultStyles.pageCenter}>
      <Text style={[defaultStyles.headerH1]}>FEED</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpLinkWrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  forgotPass: {
    margin: 10,
  },
});
