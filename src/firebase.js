import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAzNO0aeG9dnSzV7CtAjGR93FU9stWIWNA",
    authDomain: "clone-youtub-c3b1f.firebaseapp.com",
    projectId: "clone-youtub-c3b1f",
    storageBucket: "clone-youtub-c3b1f.appspot.com",
    messagingSenderId: "267577784471",
    appId: "1:267577784471:web:802d64298fea94eb4c11d2",
    measurementId: "G-MLZXK7R19Q"
});
// the firebaseApp which we initialized above, using that we can use it get firestore which will have all the data
// we are storing it in a variable called db and we are exporting it

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
const storage=firebaseApp.storage();
export {db,auth,storage};