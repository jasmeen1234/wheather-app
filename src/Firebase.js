import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSlZ8U4K6J_hGs-B9RUaOB9ilP3cmIj_M",
  authDomain: "weather-app-3aba0.firebaseapp.com",
  projectId: "weather-app-3aba0",
  storageBucket: "weather-app-3aba0.appspot.com",
  messagingSenderId: "60915502372",
  appId: "1:60915502372:web:77681e4cb8d192dbc377b1",
  measurementId: "G-LGE5JK9PBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth=getAuth(app);
const provider=new GoogleAuthProvider()

export const signInwithGoogle =()=>{
    console.log("sign in")
    signInWithPopup(auth,provider)
    .then((result)=>{
        console.log(result);
        const name=result.user.displayName;
        localStorage.setItem("name", name);
        // console.log(localStorage.getItem("name"));
        window.location.reload(false);

    }).catch((error)=>{
        console.log(error);
    });
    
    
};