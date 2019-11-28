
import * as firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBz6zcWzBv4jBjrSO9XhfWsIbXlAYggjL4",
    authDomain: "jiji-59c1c.firebaseapp.com",
    databaseURL: "https://jiji-59c1c.firebaseio.com",
    projectId: "jiji-59c1c",
    storageBucket: "jiji-59c1c.appspot.com",
    messagingSenderId: "1015924944644",
    appId: "1:1015924944644:web:222173a89cf90bfdd2aa51",
    measurementId: "G-MYNH8EYZPQ"
  })
  const firebaseui = require('firebaseui');

  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  
  ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        return true;
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  });
  
  export default fire;
  
  /*
  jorgin.on('value', function(snapshot) {
    console.log(snapshot.val());
  });*/