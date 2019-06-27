import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDnY8ln-ANabVF1pc_qxqEf1TAE_7PsUY0",
    authDomain: "net-juns-plan.firebaseapp.com",
    databaseURL: "https://net-juns-plan.firebaseio.com",
    projectId: "net-juns-plan",
    storageBucket: "",
    messagingSenderId: "982971253863",
    appId: "1:982971253863:web:12dd62ea814f5f96"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;