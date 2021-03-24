import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
 import {ActividadesPage} from './../pages/actividades' 
 import DetallePage from './../pages/detallePage'
// //import Registro from './../components/login/Cliente/registro/componente/registro'
 import {GooglePage} from './../pages/google'
 import LoginPage from '../pages/login'
// import Info from './../components/informacion/informacion-compo/info'
 import {GalleryPage} from './../pages/galeria'
 import Form from '../pages/form'
 import Datospage from './../pages/Graficospage'
// import MapView from './../components/mapa/leaflet/mapview'
import Lugar1 from './../pages/page1'
import Lugar2 from './../pages/page2'
import Lugar3 from './../pages/page3'
import Lugar4 from './../pages/page4'
import Lugar5 from './../pages/page5'
import Lugar6 from './../pages/page6'
import Lugar7 from './../pages/page7'
import Lugar8 from './../pages/page8'
import Lugar9 from './../pages/page9'
import Lugar10 from './../pages/page10'
import Lugar11 from './../pages/page11'
 import LandingPage from './../pages/landing'
import {ListContainer} from './../components/actividades/container/list-container'
import Home from '../components/Landing/Landing'
//import Gallery from '../components/gallery/galeria'
import MapView from '../components/mapa/leaflet/mapview'
//import AgregarActividades from './../components/Formulario/form-actividades'
import LoginCliente from './../components/login/Cliente/loginCliente'
import ContactoPage from './../pages/contacto'


export const ClientsRoute = () => {

    return (
        
        <Router>
            <Switch>
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/actividades" component={ListContainer}/> */}
            {/* <Route path ="/galeria" component ={Gallery} /> */}
            
            <Route path="/detalle/:actividadId" component={DetallePage}/>
            <Route path ="/mapa" component ={MapView} />
            {/* <Route path ="/form" component ={AgregarActividades} /> */}
            
            
                {/* <Route exact path="/info" component={Info} />
                
                <Route path="/detalle/:actividadId" component={DetallePage}/>
                <Route path="/galeria" component={GalleryPage}/>
                
                <Route exact path ="/form" component ={Form} />
                
                s
                <Route exact path ="/mapa" component ={MapView} />
               */}
               <Route exact path ="/form/:actividadId" component ={Form} />
               <Route exact path ="/datos" component ={Datospage} />
                <Route exact path ="/loginGoogle" component ={GooglePage} />  
                <Route exact path ="/login" component ={LoginPage} /> 
                <Route exact path ="/lugar1" component ={Lugar1} />
                <Route exact path ="/lugar2" component ={Lugar2} />
                <Route exact path ="/lugar3" component ={Lugar3} />
                <Route exact path ="/lugar4" component ={Lugar4} />
                <Route exact path ="/lugar5" component ={Lugar5} />
                <Route exact path ="/lugar6" component ={Lugar6} />
                <Route exact path ="/lugar7" component ={Lugar7} />
                <Route exact path ="/lugar8" component ={Lugar8} />
                <Route exact path ="/lugar9" component ={Lugar9} />
                <Route exact path ="/lugar10" component ={Lugar10} />
                <Route exact path ="/lugar11" component ={Lugar11} />
                <Route exact path ="/login" component ={LoginPage} /> 
                <Route path="/galeria" component={GalleryPage}/>
                <Route path="/actividades" component={ActividadesPage}/>
                <Route exact path ="/form" component ={Form} />
                <Route exact path ="/contacto" component ={ContactoPage} />
                {/*<Route exact path ="/register" component ={Registro} /> 
                
                {/* 
                <Route path ="/form" component ={Form} /> */}

            </Switch>
        </Router>
    );
};