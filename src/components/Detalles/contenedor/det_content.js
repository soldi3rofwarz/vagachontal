import React ,{useState,useEffect}from 'react';
import 
    {db}
 from '../../data/firebase-config';

import Detalles from './../componentes/detalles'

const Det_content = (props) => {

    const{actividad,fecha,precio,organizacion ,salida,hora,cupos,latitud1,longitud1,latitud2,longitud2,latitud3,longitud3,descripcion,fileUrl}= props

    const [users,setUaers]= useState('')
    const [band,setband]= useState(false)
    const[value, setValue]= useState(cupos)

    

    var user=[]
    
    function agregaruser(email){
        let newuser={
            email:'lunarbaulla@gmail.com'
        }
        user.push(newuser)
        localstorageuser(user)
    }
    function getuser(){
        var storageuser= localStorage.getItem('localuser')
        if (storageuser==null){user=[]}else{user=JSON.parse(storageuser)}
        return user
    }

    function localstorageuser(puser){
        localStorage.setItem('localuser',JSON.stringify(puser))
    }
        const Limite=()=>{
            setValue(cupos -1)

            if(value ===0){
                setValue()
            }
        }
        const handleAgregarClick = (e) => {
            e.preventDefault();
            //aquí irían las validaciones
            if(!actividadId) {
                db.collection('users').add({
                    users,
                    actividadId,
                }).then(() => {
                    console.log("Guardado!!!!", actividadId);
                }).catch((error) => {
                    console.log("Error: ", error);
                });
            }
          }

        const Agregado =()=>{ 
            setband(true)
            setValue(value-1)
            if (value === 0){
                
            }

            agregaruser('lunarbaulla@gmail.com');

            Limite()
        }
        const Cancelar =()=>{
            setband(true)
            if (value > 0){
            setValue(value-1)
            setband(false)
            }
        }

       
        console.log('dddsa',fecha)
    return ( 
        <Detalles 
        Limite ={Limite}
        value={value}
       Cancelar={Cancelar}
       Agregado={Agregado}
        band={band}
        organizacion={organizacion}
        actividad={actividad}
        fecha={fecha}
        precio={precio}
        salida={salida}
        hora={hora}
        cupos={cupos}
        latitud1={latitud1}
        longitud1={longitud1}
        latitud2={latitud2}
        longitud2={longitud2}
        latitud3={latitud3}
        longitud3={longitud3}
        descripcion={descripcion}
        getUser={getuser}
        fileUrl={fileUrl}
        />
    );
}
 
export default Det_content;