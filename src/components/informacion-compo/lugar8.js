import React from 'react';

import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import hato1 from './../../assets/hato1.jpg'
import hato2 from './../../assets/hato2.jpg'
import Paper from '@material-ui/core/Paper'
import GoogleFontLoader from 'react-google-font-loader';
import Anuncio from './../../anuncios/anuncios'

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

const Lugar8 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
    <div style={{width:'70vw', marginBottom:'20px',marginLeft:'15%'}}><Lugares/></div>
        <section style={{height:'auto',width:'q00vw',marginLeft:'50px', overflow:'hidden',display:'flex'}}>
        
        
      	<Paper variant="outlined" style={{display: 'flex',width:'70vw'}}>
          <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
                <h2 >Hato Grande</h2>
                    <h4>
                    Mesetas de Hato Grande
                    </h4>
                    <p>
                    Esta serranía con formaciones rocosas, vegetación abundante,  se pueden encontrar vestigios arqueológicos en algunas partes de ella.
                    </p>
                    <p>
                    Ubicada a 12 km al suroeste de Juigalpa, Chontales, su clima es cálido y seco, posee vistas hermosas a la ciudad de Juigalpa, coordillera Amerrique, el lago Cocibolca y la Isla de Ometepe con sus dos volcanes: el Concepción y el Maderas.

                    </p>
                    
                  
                </div>

		<div style={{width:'60vw'}} className='imagenes'>
        <img src={hato1} className='img1' style={{marginLeft:'10px',width:'23vw', marginBottom:'130px'}}/>
		  <img src={hato2}  className='img2' style={{width:'23vw', marginLeft:'150px'}}/>
		</div>
		               
  	</Paper>
    <Anuncio/>
      </section>
	  </>
    );
};
export default Lugar8

