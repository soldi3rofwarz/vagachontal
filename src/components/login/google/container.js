import React,{useState, useEffect} from 'react'
import firebase,{googleAuthProvider} from '../../../data/firebase-config'



 export const onSubmit=()=>{
    firebase.auth()
    .signInWithPopup(googleAuthProvider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch((error) => {
        console.log('equisde',error)
        // ...
    });
}
 export const logOut =()=>{
    firebase.auth().signOut().then(() => {
        console.log('salio')
         
       
      }).catch((error) => {
        console.log(error)
      });
}

 