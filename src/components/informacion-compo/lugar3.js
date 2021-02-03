import React from 'react';

import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import piedra from './../../assets/piedra1.jpg'
import piedra2 from './../../assets/piedra2.jpg'

const PhotosSet= [

{
	src: piedra,
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
	    <div style={{height:'80px'}}></div >
        <Lugares/>
        <div style={{height:'40px'}}></div >
      	<div >
            <div className="row"style={{margin:'auto'}}>
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
                    Otro de sus principales atractivos es el Baño de las Doncellas, una poza de agua entre piedras donde, según relatos, las mujeres que se bañaban volvían a ser vírgenes.
                    </p>
                    <p>
                    El parque, considerado la biblioteca precolombina más importante en Nicaragua, fue declarado en 2008 Patrimonio Nacional de Historia y Cultura por la Unesco.
                    </p>
                </div>

		<div>
			<Gallery photos = {PhotosSet}/>
		</div>
		               
  	</div>
	  </>
    );
};
export default Lugar3