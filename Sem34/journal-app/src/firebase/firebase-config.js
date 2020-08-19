import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB2m2YE9tvcFkcqLUFzbX6mnvkAVRHksuE",
    authDomain: "app-react-b3840.firebaseapp.com",
    databaseURL: "https://app-react-b3840.firebaseio.com",
    projectId: "app-react-b3840",
    storageBucket: "app-react-b3840.appspot.com",
    messagingSenderId: "721894846993",
    appId: "1:721894846993:web:dc8405bdd32b835720b7b0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}