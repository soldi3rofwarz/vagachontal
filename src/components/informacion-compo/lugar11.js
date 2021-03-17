import React from 'react';

import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import garrobo from './../../assets/garrobogrande.jpg'
import garrobo2 from './../../assets/garrobogrande2.jpg'
import Paper from '@material-ui/core/Paper'
import GoogleFontLoader from 'react-google-font-loader';

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

const PhotosSet= [

{
	src: garrobo,
	width: 4,
	height: 3
},

{
	src: garrobo2,
	width: 4,
	height: 3
},

]
const Lugar11 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
        <section style={{height:'auto',width:'70vw',marginLeft:'100px', overflow:'hidden'}}>
        <div style={{width:'70vw', marginBottom:'20px'}}><Lugares/></div>
        
      	<Paper variant="outlined" style={{display: 'flex'}}>
          <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
          <h2 >Pirámides de Garrobo Grande</h2>
                    
                    <p>
                    Para todos los amantes de la aventura totalmente extrema, esta es la oportunidad de conocer uno de los escenarios que a simple vista no da mucho que decir; a una altura no mayor de 200 m.s.n.m, el Cerro Las Ventanas se ubica en la jurisdicción de la ciudad de Acoyapa - Chontales, Nicaragua en el km 194 carretera a San Carlos, Rio San Juan; con aproximado de 30 hectáreas territoriales, se impone a la vista de los viajantes de la panamericana.
                    </p>
                    
                    <p>
                    En la comunidad Las Tucas a 8 km de la ciudad de Acoyapa, se hace el desvío a la izquierda recorriendo solamente 3 km. 
                    </p>

                    <p>
                    La entrada, por su naturaleza es propiedad privada, pero con solo una charla ante los propietarios, bastará para conceder el permiso de acceso. No hay caminos marcados para la conquista del monolito, mas la imprudencia y la adrenalina son consejeras para tal apertura.  
                    </p>

                    <p>
                    Las hermosas cuevas que se encuentran en el intermedio del monolito, muestra la actividad geológica que encierra el sitio durante millones de años; Guano como desechos viscerales de los murciélagos aroman el espacio; el sitio es perfecto para escaparse de lo aglomerado. La vistas son impresionantes, el aire en su dominio da vida y da muerte; y la flora en su esplendor impera en todas sus tonalidades. 
                    </p>
                    
                    
                </div>
		<div style={{width:'60vw'}} className='imagenes'>
        <img src={garrobo} className='img1' style={{marginLeft:'10px',width:'23vw', marginBottom:'130px'}}/>
		<img src={garrobo2}  className='img2' style={{width:'23vw', marginLeft:'180px'}}/>
		</div>
		               
  	</Paper>
      </section>
	  </>
    );
};
export default Lugar11

