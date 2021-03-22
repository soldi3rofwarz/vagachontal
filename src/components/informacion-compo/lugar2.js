import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import amerrique from './../../assets/amerrique.jpg'
import amerrique2 from './../../assets/amerrique2.jpg'
import Paper from '@material-ui/core/Paper';
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

const PhotosSet= [

{
	src: amerrique,
	width: 4,
	height: 3
},

{
	src: amerrique2,
	width: 4,
	height: 3
},

]
const Lugar2 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
    <div style={{width:'70vw', marginBottom:'20px',marginLeft:'15%'}}><Lugares/></div>
        <section style={{height:'auto',width:'q00vw',marginLeft:'50px', overflow:'hidden',display:'flex'}}>
        
        
      	<Paper variant="outlined" style={{display: 'flex',width:'70vw'}}>
          <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
                <h2 >Cordillera Amerrique</h2>
                    <h4>
                    "Lugar del viento" o "donde el viento sopla", llamaron los mayas a esta cordillera
                    </h4>
                    <p>
                        La Reserva Natural de Amerrique es una extensa sierra que determina las condiciones climáticas del departamento de Chontales. Su formación está relacionada a una milenaria actividad volcánica. Antiguamente fue habitada por un aguerrido pueblo, cuyos vestigios están dispersos todo el quebradizo paisaje. Algunas fuentes históricas han relacionado su nombre con el bautizo del continente americano.
                    </p>
                    <p>
                        El área protegida Reserva Natural Serranía de Amerrisque, forma parte de la cordillera de Amerrisque con altas montañas, quebradas, colinas escarpadas, planicies seccionadas y valles encajonados. Se localiza en la región central de Nicaragua y ocupa territorio de seis municipios del país, el municipio de Camoapa del Departamento de Boaco y los municipios de La Libertad, Juigalpa, Comalapa, San Pedro de Lovago y San Francisco de Cuapa en el Departamento de Chontales, con una extensión de 19,194.86 hectáreas.
                    </p>
                    <p>
                    La Reserva Natural Serranía de Amerrisque, fue creada bajo Decreto No. 42-91 del 31 de Octubre de 1991, Declaración de áreas protegidas en varios cerros macizos montañosos, volcanes y lagunas del país
                    </p>
                  
                </div>

		<div style={{width:'60vw'}} className='imagenes'>
        <img src={amerrique} className='img1' style={{marginLeft:'10px',width:'23vw', marginBottom:'130px'}}/>
		  <img src={amerrique2}  className='img2' style={{width:'23vw', marginLeft:'150px'}}/>
		</div>
		               
  	</Paper>
    <Anuncio/>
      </section>
	  </>
    );
};
export default Lugar2