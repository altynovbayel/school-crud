import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAqS59xb4yVJyGLTB3Jmkz2e72jvG5_Jh0",
  authDomain: "school-crud-afc34.firebaseapp.com",
  projectId: "school-crud-afc34",
  storageBucket: "school-crud-afc34.appspot.com",
  messagingSenderId: "719865469732",
  appId: "1:719865469732:web:e025f644f417a0a2d271b1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
