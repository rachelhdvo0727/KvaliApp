import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import defaultStyles from '../styles/General';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/actions/UserActions';
import { StackActions, useNavigation } from '@react-navigation/native';

const Menu = props => {
   const dispatch = useDispatch();
   const navigation = useNavigation();
   const user = useSelector(state => state?.user?.loggedInUser);

   React.useEffect(() => {
      console.log(user);
      if (user === undefined) {
         console.log(user);
         // navigation.dispatch(StackActions.popToTop());
      }
   });

   return (
      <View style={defaultStyles.pageCenter}>
         <Text>This is Menu screen</Text>

         <Button onPress={() => dispatch(logOut())} title="Log out"></Button>
      </View>
   );
};

export default Menu;
