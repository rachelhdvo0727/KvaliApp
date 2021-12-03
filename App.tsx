import React from 'react';
// Styles
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
// Redux
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ChatReducer from './store/reducers/ChatReducer';
import UserReducer from './store/reducers/UserReducer';
import EventReducer from './store/reducers/EventReducers';

import Navigation from './routes/Navigation';

const rootReducer = combineReducers({
   chat: ChatReducer,
   user: UserReducer,
   event: EventReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const loadFonts = () => {
   return Font.loadAsync({
      'Teko-Medium': require('./assets/fonts/Teko/Teko-Medium.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
      'OpenSans-Medium': require('./assets/fonts/OpenSans/OpenSans-Medium.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
   });
};

export default function App() {
   const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
   const [fontLoaded, setFontLoaded] = React.useState(false);

   return (
      <Provider store={store}>
         {!fontLoaded ? (
            <AppLoading
               startAsync={loadFonts}
               onFinish={() => setFontLoaded(true)}
               onError={error => console.error(error)}
            />
         ) : (
            <Navigation />
         )}
      </Provider>
   );
}

const styles = StyleSheet.create({});
