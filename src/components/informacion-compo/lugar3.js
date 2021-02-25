import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import piedra1 from './../../assets/piedra1.jpg'
import piedra2 from './../../assets/piedra2.jpg'
import Paper from '@material-ui/core/Paper'

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
	src: piedra1,
	width: 4,
	height: 3
},

{
	src: piedra2,
	width: 4,
	height: 3
},

]
const Lugar3 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
        <section style={{height:'auto',width:'70vw',marginLeft:'100px', overflow:'hidden'}}>
        <div style={{width:'70vw', marginBottom:'20px'}}><Lugares/></div>
        
      	<Paper variant="outlined" style={{display: 'flex'}}>
          <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
                <h2 >Piedras Pintadas</h2>
                    <h4>
                     El parque es considerado como la biblioteca precolombina más importante del país
                     </h4>
                     <p>
                     Si querés conocer a los Chontales, tenés que visitar el Parque Arqueológico “Piedras Pintadas”, sitio histórico representativo de Villa Sandino, donde dejaron grabada su historia.
                     </p>
                     <p>
                     Funcionó como centro ceremonial de los Chontales y sirvió como puesto de vigilancia, pues en su parte alta se observa la Cordillera Amerrisque, límite natural con los territorios de los Chorotegas y Nicaraos. Contiene más de 2000 petroglifos labrados en 158 piedras, conectadas a través de senderos, que datan del período de 200 a 800 a.C.
                     </p>
                     <p>
                     Las piedras están distribuidas en 13 manzanas. Las figuras se dividen en cuatro tipos; antropomorfas (humanos), pitomorfas (plantas), abstractas (como entendían la vida) y las zoomorfas (animales).
                     </p>
                     <p>
                     Otro de sus principales atractivos es el Baño de las Doncellas, una poza de agua entre piedras donde, según relatos, las mujeres que se bañaban volvían a ser vírgenes.                    </p>
                    <p>
                    El parque, considerado la biblioteca precolombina más importante en Nicaragua, fue declarado en 2008 Patrimonio Nacional de Historia y Cultura por la Unesco.
                    </p>
                </div>
		<div style={{width:'60vw'}} className='imagenes'>
        <img src={piedra1} className='img1' style={{marginLeft:'10px',width:'23vw', marginBottom:'130px'}}/>
		<img src={piedra2}  className='img2' style={{width:'23vw', marginLeft:'180px'}}/>
		</div>
		               
  	</Paper>
      </section>
	  </>
    );
};
export default Lugar3