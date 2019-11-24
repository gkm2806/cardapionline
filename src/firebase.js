import firebase from "firebase"
import * as firebase from "firebase";
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
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    // Other config options...
  });
  
  
  ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  });
  
  export default fire;
  
  /*
  jorgin.on('value', function(snapshot) {
    console.log(snapshot.val());
  });*/