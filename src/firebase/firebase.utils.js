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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating the user', error)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;