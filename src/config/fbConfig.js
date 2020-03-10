import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCE1tVNHzkyM1XUDvsDtsK9VY78VM2p7_8",
  authDomain: "timekeeping-3e757.firebaseapp.com",
  databaseURL: "https://timekeeping-3e757.firebaseio.com",
  projectId: "timekeeping-3e757",
  storageBucket: "timekeeping-3e757.appspot.com",
  messagingSenderId: "521035245117",
  appId: "1:521035245117:web:14674409681b0a6b036c54",
  measurementId: "G-RKP0Y0EK2C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;