import React from 'react';
import './informacion.css'
import Gallery from 'react-photo-gallery'
import Lugares from './../gallery/lugares'
import corozo from './../../assets/corozo1.jpg'
import corozo2 from './../../assets/corozo2.jpg'
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
	src: corozo,
	width: 4,
	height: 3
},

{
	src: corozo2,
	width: 4,
	height: 3
},

]
const Lugar5 = () => {
    return (
		<>
		<div style={{height:'150px'}}></div >
    <div style={{width:'70vw', marginBottom:'20px',marginLeft:'15%'}}><Lugares/></div>
        <section style={{height:'auto',width:'q00vw',marginLeft:'50px', overflow:'hidden',display:'flex'}}>
        
        
      	<Paper variant="outlined" style={{display: 'flex',width:'70vw'}}>
        <div className="row"style={{margin: 'auto', textAlign: 'center',width:'35vw',fontFamily: 'Roboto, sans-serif',height:'80vh', fontSize:'18px'}}>
          <h2 >El Corozo</h2>
                    <h4>
                    Ríos y Cascadas, opciones turísticas que ofrece Chontales
                    </h4>
                    <p>
                    En los municipios de La Libertad y en San Pedro de Lovago, Chontales tiene verdaderas joyas naturales que constituyen un oasis; las cascadas El Corozo y el Salto de Kiloma, son dos de las infinidades opciones turísticas que puede disfrutar los chontaleños y los nicaragüenses que buscan alternativas diferentes al mar.
                    </p>
                    <p>
                    Llegar hasta las Cascadas El Corozo ubicadas en La Libertad, no es nada complicado, pues al llegar a Juigalpa, busca transporte hacia el citado municipio y un taxi puede llevarlo a esta reserva natural que se encuentra del empalme de Betulia 10 kilómetros hacia el norte, en la Finca Las Tres Marías se encuentra en la comarca San Francisco de Gamalote en el caserío Las Praderas.
                    </p>
                    La vertiente hídrica en sí constituye un paraíso terrenal que día y noche emana frescas aguas, que luego recorren por el río formando represas naturales y saltos dónde los turistas la disfrutan al máximo.
                    <p>
                    El lugar aún casi virgen, representa una joya terrenal que en el futuro próximo debe ser conocida y admirada por todos los nicaragüenses, sobre todo por la facilidad de acceso.
                    </p>
                    <p> 
                    Las cascadas El Corozo, forman parte de las Tres Marías, cuya propietaria Arlen Calero, ha constituido una alianza con la Alcaldía de La Libertad y el Instituto Nicaragüense de Turismo, a fin de promover sus visitas, pero bajo un modelo de sostenibilidad.
                    <br/>
                    </p> 
                </div>
		<div style={{width:'60vw'}} className='imagenes'>
        <img src={corozo} className='img1' style={{marginLeft:'10px',width:'23vw', marginBottom:'130px'}}/>
		<img src={corozo2}  className='img2' style={{width:'23vw', marginLeft:'150px'}}/>
		</div>
		               
  	</Paper>
    <Anuncio/>
      </section>
	  </>
    );
};
export default Lugar5

