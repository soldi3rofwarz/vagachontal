import React from 'react'
import Login from './componente/login-cliente'
import ParticlesBg from "particles-bg";

const LoginCliente =(props)=>{
   const {
    email,
    setemail,
    pass,
    setpass,
    handleLogin,
    handleSignup,
    cuenta,
    setcuenta,
    emailerror,
    passerror}= props
    return(
        <>
    <Login 
     email ={email}
     setemail={setemail}
     pass={pass}
     setpass={setpass}
     handleLogin={handleLogin}
     handleSignup={handleSignup}
     cuenta={cuenta}
     setcuenta={setcuenta}
     emailerror={emailerror}
     passerror={passerror}
    />
    
    </>

    )
}

export default LoginCliente