import React, {useState} from 'react';
import MapView from '../../mapa/leaflet/mapview'


import './Detalle.css'

const Detalles = (props) => {
    
    const{actividad,fecha,precio, salida,hora,latitud1,longitud1,latitud2,longitud2,latitud3,longitud3,descripcion,
        cupos,
        Cancelar,
        Agregado,
        value,  
        band,
        getUser,
       }= props

    return ( 
        <>
            <div style={{height: '40px'}}></div>
        <section style={{height:'auto' }}>
            <div className="h" style={{display:'flex', flex:'2', borderRadius:'15px',boxShadow:'8px 8px 8px', border:'8px solid green'}} >
                <div className="mapa" > 
                <MapView
                    latitud1={latitud1}
                    longitud1={longitud1}
                    latitud2={latitud2}
                    longitud2={longitud2}
                    latitud3={latitud3}
                    longitud3={longitud3}
                /> 
                </div>
                <div style={{width:'20px'}}></div>

                <div className="det" style={{margin: '55px', textAlign:'center', width:'400px'}}>
                    <h2 style={{border: '3px solid #3CFFE2', borderRadius:'5px'}}>{actividad}</h2>
                    <br/>
                    <h3>Lugar de salida</h3>
                    <h4>{salida}</h4>
                    <br/>
                    <h3>Fecha</h3>
                    <h4>{fecha}</h4>
                    <br/>
                    <h3>Hora de salida</h3>
                    <h4>{hora}</h4>
                    <br/>
                    <h3>Precio</h3>
                    <h4>C${precio}</h4>
                </div>
            </div>
            
        </section>
        <div>
                <div className= "texto">
                <hr className="my-4"/>
                <h2>Descripcion</h2>
                <p>
                   {descripcion}
                </p>

                 {band===true?(<>
                <a className="btn btn-warning btn-lg" id="dd" href="#!" role="button" onClick={Cancelar}>
                    Cancelar</a>
                    {getUser && getUser().map(item => <span><br/>{item.email}</span>)}   </>)
               :
               (<a className="btn btn-warning btn-lg" id="dd" href="#!" role="button" onClick={Agregado}>
               Participar</a>)}
                
                
               {/** <Button variant="outline-success" className = "p" id="p">{value}</Button>{' '}
                <p>la cantidad de cupos es {cupos}</p>**/}
                </div>
                
               
            </div>
        </>     
     );
}
export default Detalles;