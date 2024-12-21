import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    messagingSenderId: process.env.REACT_APP_MESSENGER_SENDER_ID,
};
console.log(config)
const app = initializeApp(config);

const firebase = {
    app,
    getStorage,
    ref,
    listAll,
    getDownloadURL,
}

export default firebase;