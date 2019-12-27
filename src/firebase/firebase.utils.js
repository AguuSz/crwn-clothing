import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCK_g1nGIRjhF8YqF3tMpvHbFcL9UfGUX8",
    authDomain: "crwn-clothing-5707d.firebaseapp.com",
    databaseURL: "https://crwn-clothing-5707d.firebaseio.com",
    projectId: "crwn-clothing-5707d",
    storageBucket: "crwn-clothing-5707d.appspot.com",
    messagingSenderId: "169054925983",
    appId: "1:169054925983:web:a3446cafe38012273e5eaa",
    measurementId: "G-TNQ7L9WKNQ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;