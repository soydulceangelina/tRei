import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDlazSUbXvlYzFQrNdm6cAPczc0AhOce_A',
  authDomain: 'trei-2c31b.firebaseapp.com',
  databaseURL: 'https://trei-2c31b.firebaseio.com',
  projectId: 'trei-2c31b',
  storageBucket: 'trei-2c31b.appspot.com',
  messagingSenderId: '1052461129280',
  appId: '1:1052461129280:web:17014dc6e3330ad50f09a5',
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export { auth };
export default firebaseConfig;
