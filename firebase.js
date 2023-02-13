import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    setPersistence,
    browserSessionPersistence,
    getAuth,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8bnxEcWRUtEpNr_4qW45v9VUHjnaOL1g",
    authDomain: "fir-auth-demo-303ba.firebaseapp.com",
    projectId: "fir-auth-demo-303ba",
    storageBucket: "fir-auth-demo-303ba.appspot.com",
    messagingSenderId: "877300084468",
    appId: "1:877300084468:web:63603ed545eea0b185b8a1",
    measurementId: "G-54JFSD2GM9"
};
const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log(user)
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return 1;
    } catch (err) {
        if (err.code == "auth/user-not-found") {
            await registerWithEmailAndPassword(email, password)
            return 1;
        }

        alert(err.code);
        return 0;
    }
};
const logout = () => {
    signOut(auth);
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);



export {
    app,
    auth,
    logout,
    registerWithEmailAndPassword,
    logInWithEmailAndPassword
}
// Initialize Firebase
