import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch( login(123, 'Pedro') );
        }, 3500)
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => (      
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( userCred => {
                console.log(userCred);
            })
    )

}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});