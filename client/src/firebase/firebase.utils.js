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

firebase.initializeApp(config);

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;