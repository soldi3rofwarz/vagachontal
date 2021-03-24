import React, { useState, useEffect } from 'react';
import Title from './titulo';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './modal';
import './galeria.css';
import Lugares from './lugares'
import SwipeableTextMobileStepper from '../../steeper/stepper'
import firebase from '../../data/firebase-config'

const Galeria =()=>{
    const [isLogin, setIslogin]=useState(false)
    const [email, setEmail]= useState('')
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(()=>{
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log('iniciado', user)
            console.log(user.displayName + '\n' + user.email+ '\n' + user.photoURL)
            setIslogin(true)
            setEmail(user.email)
              
          } else {
              console.log('no iniciado')
          }
        })
  },[])

    return(
      <>
      <div style={{height:'15px'}}></div>
      <SwipeableTextMobileStepper/>
        <div className="App">
          
          <Title/> 
          <Lugares/>
          {isLogin===true?<>
            {email=='admin@gmail.com'?
              <>
                <UploadForm />
              </>
            :null}</>
          :null}
         

      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </div>
       
    </>
    )
}
export default Galeria;