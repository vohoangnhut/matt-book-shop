import firebase from 'firebase'
//const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: 'AIzaSyDiDG_2F7eDYQChxPBFFli3yzO0X-CtWEE',
  authDomain: 'book-store-sg-x.firebaseapp.com',
  databaseURL: 'https://book-store-sg-x.firebaseio.com',
  projectId: 'book-store-sg-x',
  storageBucket: 'book-store-sg-x.appspot.com',
  messagingSenderId: '453359978560',
  appId: '1:453359978560:web:e0f0c40042025dd780b7a5',
  measurementId: 'G-YH3ZSZ5XYN'
}

firebase.initializeApp(config);

export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;

//firebase.firestore().settings(settings);

export default firebase;
