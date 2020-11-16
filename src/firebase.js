import firebase from "firebase";
// memo: check if repository db is still active

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU97GKL_K8sD7m3YkOWY22UYk9WqSScY0",
  authDomain: "air-ui.firebaseapp.com",
  databaseURL: "https://air-ui.firebaseio.com",
  projectId: "air-ui",
  storageBucket: "air-ui.appspot.com",
  messagingSenderId: "450547802365",
  appId: "1:450547802365:web:5ce70e3a6017cdc4db1e94",
  measurementId: "G-VVZC684E44"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);