import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjJcpOwtXPOZpsT90uYCUheyNgXXIXilg",
  authDomain: "stride-f1ae6.firebaseapp.com",
  projectId: "stride-f1ae6",
  storageBucket: "stride-f1ae6.appspot.com",
  messagingSenderId: "63539191224",
  appId: "1:63539191224:web:8f0ad0c1886d804462834d",
  measurementId: "G-YKBDC9HPJT"
};


const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export default app




