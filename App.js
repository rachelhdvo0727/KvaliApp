import React from 'react';
import { StyleSheet } from 'react-native';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ChatReducer from './store/reducers/ChatReducer';
import UserReducer from './store/reducers/UserReducer';
import ReduxThunk from 'redux-thunk';

// Navigation
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeTab from './screens/HomeTab';
import ChatScreen from './screens/ChatScreen';
import ChatRoomScreen from './screens/ChatRoomScreen';
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';

// Icons
import { Entypo } from '@expo/vector-icons';
import Navigation from './Routes/Navigation';

export default function App() {
  const rootReducer = combineReducers({
    chat: ChatReducer,
    user: UserReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
