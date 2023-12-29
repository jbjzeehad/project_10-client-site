
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANkdjIvWJy3hAIaefOil8A_fVdBYRA3yY",
    authDomain: "library-da768.firebaseapp.com",
    projectId: "library-da768",
    storageBucket: "library-da768.appspot.com",
    messagingSenderId: "633118912218",
    appId: "1:633118912218:web:e7d892cda77b3278a5bfe3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;




