import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAd2sXnz93GeimLTyP6GdhAkoiLGia1SxE",
    authDomain: "react-app-fb2e6.firebaseapp.com",
    databaseURL: "https://react-app-fb2e6.firebaseio.com",
    projectId: "react-app-fb2e6",
    storageBucket: "react-app-fb2e6.appspot.com",
    messagingSenderId: "63226337692",
    appId: "1:63226337692:web:04c5494d8c1c8fa2689059"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}