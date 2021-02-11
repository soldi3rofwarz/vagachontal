import React, {useState} from 'react';
import MapView from '../../mapa/leaflet/mapview'
import GoogleFontLoader from 'react-google-font-loader';
import './Detalle.css'
   



const Detalles = (props) => {
    <GoogleFontLoader
    fonts={[
      {
        font: 'Roboto',
        weights: [400, '400i'],
      },
      {
        font: 'Roboto Mono',
        weights: [400, 700],
      },
    ]}
    subsets={['cyrillic-ext', 'greek']}
  />

    
    const{actividad,fecha,precio, organizacion,salida,hora,latitud1,longitud1,latitud2,longitud2,latitud3,longitud3,descripcion,fileUrl,
        cupos,
        Cancelar,
        Agregado,
        value,  
        band,
        getUser,
        Limite
       }= props

    return ( 
        <>
            <div style={{height: '140px'}}></div>
        <section style={{height:'auto'}}>
            <h2 style={{fontSize: '50px',background:'white',color:'#00a295',textAlign:'center',fontFamily: 'Roboto, sans-serif'}}>{actividad}</h2>
            <div className="h" style={{display:'flex', flex:'2', }} >
               
                <div style={{width:'50vw', overflow:'hidden' }} >
                    <img className='pic' src={fileUrl} style={{width:'48vw'}}/>
                </div>

                <div className="det" 
                style={{textAlign:'center', width:'50vw',fontFamily: 'Roboto, sans-serif',
                 background:'#00a295', color:'white',fontSize: '18px'}}>
                    
                    <br/>

                    <h3>Lugar de salida</h3>
                    <h4>{salida}</h4>
                    
                    <br/>
                    <h3>Organizacion</h3>
                    <h4>{organizacion}</h4>
                    
                    <br/>
                    <h3>Fecha</h3>
                    <h3>Fecha</h3>
                    <h4>{fecha}</h4>
                    <br/>
                    <h3>Hora de salida</h3>
                    <h4>{hora}</h4>
                    <br/>
                    <h3>Precio</h3>
                    <h4>C${precio}</h4>
                    <br/>
                    <h3>Cupos</h3>
                    <h4>{cupos}</h4>
                </div>
            </div>
            <div style={{display:'flex', flex:'2' }}>
                <div className="mapa" style={{width:'50vw', height:'100vh'}}> 
                <MapView
                    latitud1={latitud1}
                    longitud1={longitud1}
                    latitud2={latitud2}
                    longitud2={longitud2}
                    latitud3={latitud3}
                    longitud3={longitud3}
                /> 
                </div>
                <div className='inf' style={{fontSize: '18px',textAlign:'center',width:'50vw',fontFamily: 'Roboto, sans-serif', background:'#00a295', color:'white'}}>
                <h2>Descripcion</h2>
                <p style={{}}>
                   {descripcion}
                </p>
                <br/>
                <h2>que llevar</h2>
                <h4>Suficiente agua <br/> almuerzo <br/> ropa deportiva</h4>
                <br/>
                <h2>Transporte</h2>
                <h4>se garantiza el transporte de ida y regreso</h4>
                <br/>
                <h2>seguridad</h2>
                <h4>se exige el uso de mascarilla en todo momento
                    <br/> el equipo se encargara de llevar un botiquin de primeros auxilios
                    <br/>

                </h4>
                
                </div>
                
            </div>
            
            <div style={{boxSizing: 'borderBox',display:'flex', flex:'2', height:'30vh', width:'100vw', textAlign:'center', marginTop:'20px'}}>
                <div style={{width:'50vw'}}>
                <h3>cupos restantes <br/></h3>
                {<h3>{value}</h3>}
                </div>
                
                <div style={{alignItems:'center', placeItems:'center'}}>
                {band===true?(<>
                <button className="btn-cancelar " id="dd" href="#!" role="button" onClick={Cancelar}>
                    Cancelar</button>
                    {getUser && getUser().map(item => <span><br/>{item.email}</span>)}   </>)
               :
               (<button className="btn-participar"  id="dd" href="#!" role="button" onClick={Agregado}>
                Participar</button>)}
                </div>
             
            </div>
            
        </section>
      
        </>     
     );
}
export default Detalles;