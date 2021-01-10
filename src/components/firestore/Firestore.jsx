import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnX2AgnJbep6h80J5T9x7aQiVikKtc85k",
    authDomain: "nwhacks2021-301222.firebaseapp.com",
    projectId: "nwhacks2021-301222",
    storageBucket: "nwhacks2021-301222.appspot.com",
    messagingSenderId: "666526234597",
    appId: "1:666526234597:web:2083216ac736200300a10c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export default firebase;
