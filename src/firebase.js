import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBdbef2YvheRxVy9VmfJ-V_PMZ5gcO5Kzo",
    authDomain: "chatroom-test-9f489.firebaseapp.com",
    databaseURL: "https://chatroom-test-9f489.firebaseio.com",
    projectId: "chatroom-test-9f489",
    storageBucket: "chatroom-test-9f489.appspot.com",
    messagingSenderId: "1018730011901",
    appId: "1:1018730011901:web:721b5aa9970441dc503294",
    measurementId: "G-RCTN83WC9H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth , provider}
export default db

