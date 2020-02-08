  import * as firebase from 'firebase/app'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDVhDPbJDmvZ72ElDe-zm2NXK0Knsn3Pbc",
    authDomain: "procleos-1.firebaseapp.com",
    databaseURL: "https://procleos-1.firebaseio.com",
    projectId: "procleos-1",
    storageBucket: "procleos-1.appspot.com",
    messagingSenderId: "407246212027",
    appId: "1:407246212027:web:07ce8436f60a05f5ab929e",
    measurementId: "G-C1E5W9EBK5"
  };
  // Initialize Firebase
  let app = null;
  if(!firebase.app.length){
    app =   firebase.initializeApp(firebaseConfig);
  }

export default firebase