import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAq8e2Ka6dAgaAHWewzbXOaVU9m8g_yLwo",
    authDomain: "react-ecommerce-9466e.firebaseapp.com",
    databaseURL: "https://react-ecommerce-9466e.firebaseio.com",
    projectId: "react-ecommerce-9466e",
    storageBucket: "react-ecommerce-9466e.appspot.com",
    messagingSenderId: "1064251744175",
    appId: "1:1064251744175:web:1af5336d9c5cafc5d2195a"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;