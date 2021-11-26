import * as SecureStore from 'expo-secure-store';

export const objToString = obj => JSON.stringify(obj);

export async function saveData(key, value) {
   await SecureStore.setItemAsync(key, value);
}

export async function getSavedData(key) {
   await SecureStore.getItemAsync(key);
}

export async function deleteSavedData(key, value) {
   await SecureStore.getItemAsync(key);
}
