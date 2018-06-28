import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC5uhtt2m7pEenZZMqxdZ0WK3ZkPQOMJNw",
    authDomain: "tech-med.firebaseapp.com",
    databaseURL: "https://tech-med.firebaseio.com",
    projectId: "tech-med",
    storageBucket: "tech-med.appspot.com",
    messagingSenderId: "392131208318"
};
const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;