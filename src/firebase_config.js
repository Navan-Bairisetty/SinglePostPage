import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDGpbMqLeDX9vbsZM0GZ46VLuwAefLHuBo',
  authDomain: 'singlepost-78f63.firebaseapp.com',
  projectId: 'singlepost-78f63',
  storageBucket: 'singlepost-78f63.appspot.com',
  messagingSenderId: '1009485504081',
  appId: '1:1009485504081:web:c69125183257e663f22270',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
