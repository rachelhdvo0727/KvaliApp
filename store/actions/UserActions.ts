import User from '../../models/User';
import { saveData, objToString } from '../../utils/functions';
import * as SecureStore from 'expo-secure-store';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

const apiKey = 'AIzaSyBWOZqita1CRS5gN9bFCaj_o3kaQd4vLWc';

export const signUp = (email: string, password: string) => {
   return async (dispatch: (arg0: { type: string; payload: any }) => any) => {
      const response = await fetch(
         `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               email: email,
               password: password,
               returnSecureToken: true,
            }),
         },
      );
      const data = await response.json(); // json to javascript
      !response.ok
         ? console.log('signUp err', data)
         : dispatch({ type: SIGN_UP, payload: data });
   };
};

export const logIn = (email: string, password: string) => {
   return async (
      dispatch: (arg0: {
         type: string;
         payload: { user: User; token: any };
      }) => void,
   ) => {
      const response = await fetch(
         `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               email: email?.toLowerCase(),
               password: password,
               returnSecureToken: true,
            }),
         },
      );

      const data = await response.json();
      if (!response.ok) {
         console.log('logIn err', data);
      } else {
         const user = new User(
            data.localId,
            '',
            '',
            '',
            email?.toLowerCase(),
            '',
            '',
            '',
         );

         // convert time
         let expiredIn = new Date();
         expiredIn.setSeconds(
            expiredIn.getSeconds() + parseInt(data.expiresIn),
         );

         // save user in SecureStore
         saveData('user', objToString(user));
         saveData('token', data.idToken);
         saveData('refreshToken', data.refreshToken);
         saveData('expiration', JSON.stringify(expiredIn));

         dispatch({
            type: LOG_IN,
            payload: { user: user, token: data.idToken },
         });
      }
   };
};

export const restoreUser = (user: Object, token: string) => {
   return { type: LOG_IN, payload: { user, token } };
};

export const logOut = () => {
   SecureStore.setItemAsync('userToken', '');
   SecureStore.setItemAsync('user', '');
   SecureStore.setItemAsync('expiration', '');
   SecureStore.setItemAsync('refreshToken', '');
   return { type: LOG_OUT };
};

export const refreshToken = (refreshToken: any) => {
   return async (dispatch: (arg0: { type: string; payload: any }) => any) => {
      const response = await fetch(
         `https://securetoken.googleapis.com/v1/token?key=${apiKey}`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               refresh_token: refreshToken,
               grant_type: 'refresh_token',
            }),
         },
      );
      const data = await response.json(); // json to javascript
      console.log(data);
      !response.ok
         ? console.log('refreshToken err', data)
         : dispatch({ type: REFRESH_TOKEN, payload: data.id_token });
   };
};
