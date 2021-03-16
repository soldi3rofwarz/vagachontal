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
                    <h4>
                    Pirámides de Garrobo Grande: Atractivo Natural e Histórico de Chontales
                    </h4>
                    <p>
                    El Departamento de Chontales cuenta con numerosos atractivos naturales, arqueológicos e históricos, prueba de ello son las Pirámides de Garrobo Grande.
                    </p>
                    <p>
                    Las Pirámides de Garrobo Grande están ubicadas en la Comarca la Gateada en el Municipio de Villa Sandino, siendo descubiertas en el siglo XIX por campesinos en busca de tierras para sembrar.
                    </p>
                    <p>
                    Según estudios arqueológicos de expertos nicaragüenses, la mayor parte de la pirámides están bajo tierra y se calculan que podrían ser incluso más antiguas que las pirámides mayas de México o que las ruinas de Machu Picchu en Perú, construidas hace miles de años.
                    </p>
                    <p>
                    Las pirámides fueron investigadas en la década de los 60, las cuales constan de 4 estructuras piramidales, la mayor de ellas mide 40 metros de largo por 20 de ancho y 8 metros de altura con 3 escalones. Estas estructuras sobrepasan los 4,000 años por lo que forman parte de las estructuras piramidales mas antiguas del continente.
                    </p>
                    <p>
                    La primera referencia de la existencia de este tesoro arqueológico esta registrado en un mapa que ejecutó un señor de apellido Ferrer en el año 1853, se dice que el puso un rotulo en el mapa con el nombre de Fuinas Antiguas porque estaban intactas pero a principio del siglo le empezaron a hacer hoyos buscando Tesoros.
                    </p>
                    <p>
                    Si usted creía que en Nicaragua no habían pirámides, lo invitamos a que venga a conocer Chontales y las Pirámides de Garrobo Grande.
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

