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
const Lugar9 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
        <section style={{height:'auto',width:'70vw',marginLeft:'100px', overflow:'hidden'}}>
        <div style={{width:'70vw', marginBottom:'20px'}}><Lugares/></div>
        
      	<Paper variant="outlined" style={{display: 'flex'}}>
          <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
          <h2 >Punta Tumbé</h2>
                    <h4>
                    PUNTA TUMBÉ, AMERRIQUE ¡Tierra donde sopla el viento!
                    </h4>
                    <p>
                    A unos pocos kilómetros al Este de la ciudad de Juigalpa, se alza Punta Tumbé, su naturaleza lo hace ser imponente; celebra y da gloria a la sierra de Amerríque,  majestuoso sistema montañoso que se extiende por un perímetro cuadrado de 200 Km, esto, según el libro “Amerríque y los senderos olvidados”, iniciando sus primeras pronunciaciones geológicas en el municipio de Comalapa, hasta culminar en la tierra de los Lovigüiscas, Santo Tomas, incluyendo en su dimensión los municipios de San Francisco de Cuapa, La Libertad, Juigalpa, San Pedro de Lóvago y algunos pequeños relieves del municipio de Acoyapa.
                    </p>
                    <p>
                    Tumbé, llamado así por los lugareños, es un monolito macizo con una altura sin igual en el departamento de Chontales de 997 m.s.n.m, ubicado en el municipio de La Libertad; su basta flora recubre los escarpados rocosos, la neblina es la capa matutina y vespertina 365 días del año; lluvias no tan perennes suavizan la piel del terreno; la fauna, más de monos aulladores, chicharras y felinos a lo lejos, entonan su dominio imperioso a los extraños.
                    </p>
                    <p>
                    Muy pocos han tenido la oportunidad de conquistar la cima, los que ya han sido victoriosos de tal hecho, atestiguan con experiencia el haber estado en el lugar; otros, por su naturaleza de hozados, han destinado tiempo para acampar en los lomos de la sierra, y pasar toda una noche ante un clima áspero de 17 a 14 grados centígrados; esto,  con la simple idea de ver lancear entre las nubes los rallos de la estrella de la mañana.
                    </p>
                    <p>
                   Fuente: Pat'e perros Chontales Tour, https://pateperrochontalestour.blogspot.com/ 
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
export default Lugar9

