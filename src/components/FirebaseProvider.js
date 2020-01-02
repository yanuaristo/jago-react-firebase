import React,{useContext} from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebaseConfig from '../config/firebase';

import {useAuthState} from 'react-firebase-hooks/auth';

firebase.initializeApp(firebaseConfig);

const FireBaseContext = React.createContext();

export function useFirebase(){
    return useContext(FireBaseContext);
}

function FirebaseProvider(props) {

    const auth  = firebase.auth();
    const firestore = firebase.firestore();
    const storage = firebase.storage();
    
    const [user, loading, error] = useAuthState(auth);

    return <FireBaseContext.Provider value={{
        auth, firestore, storage, user, loading, error
    }}>
        {props.children}
    </FireBaseContext.Provider>
}

export default FirebaseProvider;