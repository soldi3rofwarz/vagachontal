import React ,{useState,useEffect}from 'react';
import {GetDataDet,DeleteU} from './detalle-data'
import Detalles from './../componentes/detalles'
import SimpleDialog from './../componentes/popup'

const Det_content = (props) => {
    let actividadId = '';

    if(props.match) actividadId = props.match.params.actividadId;
    const{id,actividad,fecha,precio,organizacion ,salida,hora,cupos,latitud1,longitud1,latitud2,longitud2,latitud3,longitud3,descripcion,fileUrl}= props

    const [users,setUsers]= useState('')
    const [band,setband]= useState(false)
    const[value, setValue]= useState(cupos)

    useEffect(() => {
        GetDataDet()
            .then(users => setUsers(users) )
           
            .catch(error => console.log("Error:", error))
    }, []);
    

    
        const Limite=()=>{
            setValue(cupos -1)

            if(value ===0){
                setValue()
            }
        }
        
        const Agregado =()=>{ 
            setband(true)
            setValue(value-1)
            if (value === 0){
                
            }

            Limite()
        }
        const Cancelar =(usersId)=>{
            setband(true)
            if (value > 0){
            setValue(value-1)
            setband(false)
            }
            DeleteU(usersId)
        }

       
        console.log('dddsa',users)
    return ( 
        <>
        <Detalles 
        users={users}
        Limite ={Limite}
        value={value}
        idActividad={id}
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
        fileUrl={fileUrl}
        />
        <SimpleDialog users={users}  idActividad={id}/>
        </>
    );
}
 
export default Det_content;