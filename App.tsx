import React from 'react';
import { StyleSheet } from 'react-native';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ChatReducer from './store/reducers/ChatReducer';
import UserReducer from './store/reducers/UserReducer';
import ReduxThunk from 'redux-thunk';

import Navigation from './routes/Navigation';

const rootReducer = combineReducers({
    chat: ChatReducer,
    user: UserReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default function App() {
    const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}

const styles = StyleSheet.create({});
