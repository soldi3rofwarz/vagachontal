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
const Lugar10 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
        <section style={{height:'auto',width:'70vw',marginLeft:'100px', overflow:'hidden'}}>
        <div style={{width:'70vw', marginBottom:'20px'}}><Lugares/></div>
        
      	<Paper variant="outlined" style={{display: 'flex'}}>
          <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
          <h2 >Punta Mayales</h2>
                    <h4>
                    Punta Mayales: Un tesoro frente a la costa del Lago
                    </h4>
                    <p>
                    Con una costa de 7 kilómetros de extensión que tiene su centro en la desembocadura del río Mayales con el Gran Lago de Nicaragua, la Reserva Silvestre Punta Mayales es una esperanza para la conservación del bosque y la exótica fauna acuática que aquí existe, lo que ha convertido a este lugar en un importante atractivo turístico chontaleño.
                    </p>
                    <p>
                    El río Mayales nace en El Naranjal, municipio de La Libertad, y luego de pasar por las cercanías de Juigalpa, cabecera departamental de Chontales, fluye por el llano hacia la cuenca del lago en un recorrido de 80 kilómetros, trayecto que es aprovechado por ganaderos y productores agrícolas para irrigar sus fincas, huertos y plantíos de arroz, frijoles, cítricos, verduras y otros.
                    </p>
                    <p>
                    La Reserva Silvestre Punta Mayales se encuentra dentro de la finca agropecuaria Santa Martha, de 1,200 manzanas de extensión, de las que 320 se usan para conservar el bosque y todas sus especies de fauna terrestre y lacustre.
                    </p>
                    <p>
                    Este lugar también es visitado por turistas extranjeros que buscan ambientes de paz, tranquilidad y para estar en contacto con la naturaleza, caminar por el bosque y, sobre todo, recorrer el río para avistar aves nativas y migratorias.
                    </p>
                    <p>
                    La Reserva Silvestre Punta Mayales se encuentra a 170 kilómetros de Managua, en la desembocadura del río Mayales, frente al Lago de Nicaragua, 30 kilómetros al oeste de Juigalpa, municipio de Chontales. Para llegar al lugar desde Managua, puede tomar un bus en la terminal del mercado de Mayoreo, que vaya directo a Juigalpa o a Ciudad Rama, bajarse en la gasolinera Puma y tomar otro bus que vaya a Puerto Díaz, hasta llegar al empalme.
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
export default Lugar10

