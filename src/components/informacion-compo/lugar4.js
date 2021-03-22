import React from 'react';
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import cuapa from './../../assets/cuapa1.jpg'
import cuapa2 from './../../assets/cuapa2.jpg'
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

const PhotosSet= [

{
	src: cuapa,
	width: 4,
	height: 3
},

{
	src: cuapa2,
	width: 4,
	height: 3
},

]
const Lugar4 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
    <div style={{width:'70vw', marginBottom:'20px',marginLeft:'15%'}}><Lugares/></div>
        <section style={{height:'auto',width:'q00vw',marginLeft:'50px', overflow:'hidden',display:'flex'}}>
        
        
      	<Paper variant="outlined" style={{display: 'flex',width:'70vw'}}>
        <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
        <h2>La Piedra de Cuapa</h2>
          <h4>
          El monolito de Cuapa, o “Lugar del Sol”
          </h4>
          <p>
          La Piedra de Cuapa o Monolito de Cuapa es un emblema de la ciudad de San Francisco de Cuapa.Cuenta más de 150 metros de altura, ubicado a cuatro kilómetros del casco urbano y que le da la bienvenida a la ciudad.
          </p>
          <p>
          El municipio de Cuapa no sólo se caracteriza por las supuestas apariciones de la virgen, sino también por un singular monolito de más de 150 metros de altura, ubicado a cuatro kilómetros del casco urbano y que le da la bienvenida a la ciudad.
          </p>
          <p>
          El historiador y filólogo nicaragüense Alejandro Dávila Bolaños relaciona a Cuapa con el monolito, y presume que el significado que da al nombre del municipio es para la piedra, y señala: Cua-pa, coatl: bola brillante, el Sol; pa: lugar. Lugar del Sol. Elevada roca monolítica, situada al norte de Juigalpa y al oriente de Comalapa, y que con seguridad fue usada por los nahuas del lugar para hacer observaciones astronómicas, y en particular estudiar el movimiento del Sol para determinar la fecha del comienzo de la estación lluviosa.
          </p>
      </div>
<div style={{width:'60vw'}} className='imagenes'>
<img src={cuapa} className='img1' style={{marginLeft:'10px',width:'23vw', marginBottom:'130px'}}/>
<img src={cuapa2}  className='img2' style={{width:'23vw', marginLeft:'150px'}}/>
</div>
		               
  	</Paper>
    <Anuncio/>
      </section>
	  </>
    );
};
export default Lugar4

