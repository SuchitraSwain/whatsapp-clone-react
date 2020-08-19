import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCz9J52tZ1JYCO4wEExRfm4jG0wrfHm4es",
  authDomain: "whatsapp-clone-react-js.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-react-js.firebaseio.com",
  projectId: "whatsapp-clone-react-js",
  storageBucket: "whatsapp-clone-react-js.appspot.com",
  messagingSenderId: "373137156843",
  appId: "1:373137156843:web:1cc65cd1cb67737cb22cae",
  measurementId: "G-BMFCBDNW3R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
