import React from 'react'
import Login from './componente/login-cliente'
import ParticlesBg from "particles-bg";

const LoginCliente =()=>{
    return(
        <>
    <Login/>
    <ParticlesBg type="random" bg={true}/>
    </>

    )
}

export default LoginCliente