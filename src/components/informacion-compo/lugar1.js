import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import Nancitalpic from './../../assets/elnancital.jpg'
import Nancitalpic2 from './../../assets/elnancital2.jpg'
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
	src: Nancitalpic,
	width: 5,
	height: 4
},

{
	src: Nancitalpic2,
	width: 5,
	height: 4
},


]
const Lugar1 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div>
    <div style={{width:'70vw', marginBottom:'20px', marginLeft:'15%'}}><Lugares/></div>
      	<section style={{height:'700px',width:'100vw',marginLeft:'50px', overflow:'hidden',display:'flex'}}>
		  
		  
		  <Paper variant="outlined" style={{display: 'flex',width:'70vw'}}>
		
		  <div className="row" style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
                <h2 >El Nancital</h2>
				
                    <h4>
                    	El Nancital un paraíso natural frente a Acoyapa
                    </h4>
                   <p>
                    	La mayoría de sus islas son vírgenes y están deshabitadas. 
                    	Las familias que viven en las más grandes llegaron allí hace muchos años, procedentes de Chontales
                    </p>
                    <p>
                    	El Archipiélago el Nancital, es un bello paraíso conformado por 27 islas con una gran diversidad de flora y fauna, que el visitante nacional y extranjero disfruta al recorrer el Lago Cocibolca en lancha.
                    </p>
                    <p>
                    	32 kilómetros hay que recorrer en vehículo desde el municipio de Acoyapa Chontales, para disfrutar de esta belleza localizada en el centro de Nicaragua.
                    </p>
                    <p>
                    	Durante el recorrido en las aguas frescas y cristalinas del Gran Lago de Nicaragua, se puede apreciar de una imponente vista de los volcanes Concepción y Maderas.
                    </p>
            </div>
			<div style={{width:'60vw'}} className='imagenes' >
				{/* <Gallery photos = {PhotosSet}/> */}
				<img className='img1' src={Nancitalpic} style={{marginLeft:'10px',width:'23vw', marginBottom:'30px'}}/>
				<img className='img2' src={Nancitalpic2} style={{width:'25vw', marginLeft:'120px'}}/>
			</div>
			</Paper>
		
		               <Anuncio/>
  		</section>
      
	  </>
    );
};
export default Lugar1