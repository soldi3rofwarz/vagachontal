import React from 'react';

import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import PuertoDiaz1 from './../../assets/puertodiaz.jpg'
import PuertoDiaz2 from './../../assets/puertodiaz2.jpg'
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
	src: PuertoDiaz1,
	width: 4,
	height: 3
},

{
	src: PuertoDiaz2,
	width: 4,
	height: 3
},

]
const Lugar7 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
    <div style={{width:'70vw', marginBottom:'20px',marginLeft:'15%'}}><Lugares/></div>
        <section style={{height:'auto',width:'q00vw',marginLeft:'50px', overflow:'hidden',display:'flex'}}>
        
        
      	<Paper variant="outlined" style={{display: 'flex',width:'70vw'}}>
        <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
<h2 >Puerto Díaz</h2>
          <h4>
          Puerto Díaz, una opción turística más del Lago Cocibolca.
          </h4>
    
          <p>
          La inmensidad de las aguas del lago Cocibolca o de Nicaragua, contienen muchos tesoros naturales que solo necesitan ser visitados para ser conocidos, uno de estos es Puerto Díaz, ubicado a tan solo 28 kilómetros del municipio de Juigalpa.
          </p>

          <p>
          Desde este lugar se puede acceder desde la conocida gasolinera Puma en Juigalpa hacia el sur, hasta llegar a sus cristalinas aguas, que sirven de sustento comercial a las familias lugareñas, que ven en la pesca, su principal actividad económica y ahora apuntan al turismo.
          </p>

          <p>
          En el trayecto para llegar a este rincón del inmenso lago, podrá conocer las principales haciendas ganaderas de Juigalpa, como la de Hato Grande, que según historiadores es ahí donde se origina la ganadería nicaragüense.
          </p>

          <p>
          Puerto Díaz tiene mucha historia, por este puerto lacustre pasaba todo el oro que provenía de la Libertad y Santo Domingo hacia Granada. El puerto también era utilizado en los años 1910, 20, 30 y 40 para el traslado de ganados, miel de abejas, cacao, frijoles, maíz y otros alimentos para la región del pacifico.
          </p>

          <p>
          Este lugar ofrece diversas opciones turísticas que deben ser explotadas de manera racional, una playa de poca profundidad, que la convierte en un lugar acogedor para los turistas nacionales y extranjeros.
          </p>
          <p>
          Los pescadores en época de Semana Santa ofrecen sus servicios de alquiler de pangas, que incluye un tour por las cuatro islas que dan brillo a este lugar, como la Isla Grande, la isla Redonda, Del Muerto y La Rosa, las que son habitadas por diversas familias.
          </p>
          <p>
          Desde Puerto Díaz se aprecia los imponentes Volcán Concepción y Maderas en la isla de Ometepe, que está rodeada de las aguas del lago de Nicaragua.
          </p>


      </div>
<div style={{width:'60vw'}} className='imagenes'>
<img src={PuertoDiaz1} className='img1' style={{marginLeft:'10px',width:'23vw', marginBottom:'130px'}}/>
<img src={PuertoDiaz2}  className='img2' style={{width:'23vw', marginLeft:'150px'}}/>
</div>
		               
  	</Paper>
    <Anuncio/>
      </section>
	  </>
    );
};
export default Lugar7

