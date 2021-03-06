import React from 'react';
import {Marker, Popup } from 'react-leaflet'
import {IconLocation} from './icon'
import {IconLocation2} from './iconoPartida'
import {IconLocation3} from './icono3'



const Marcador = ({latitud1, longitud1,latitud2, longitud2,latitud3, longitud3}) => {
    var center={}
    if(latitud1&longitud1){
        center={
            lat: latitud1,
            lng: longitud1}
   }else{
        center = {
            lat: 0,
            lng: 0,
      };
   }
   var center3={}
    if(latitud3&longitud3){
        center3={
            lat: latitud3,
            lng: longitud3}
   }else{
        center3 = {
            lat: 0,
            lng: 0,
      };
   }
   var center2={}
    if(latitud2&longitud2){
        center2={
            lat: latitud2,
            lng: longitud2}
   }else{
        center2 = {
            lat: 0,
            lng: 0,
      };
   }
   
    return ( 
        <>
         <Marker position={center} icon= {IconLocation}>
            <Popup>
                Punto de  <br /> salida
            </Popup>
         </Marker>
         <Marker position={center2} icon= {IconLocation2}>
            <Popup>
                    Punto de <br /> llegada
            </Popup>
         </Marker>
         <Marker position={center3} icon= {IconLocation3}>
            <Popup>
                    Objetivo a <br /> alcanzar
            </Popup>
         </Marker>
         
        </>
    );
}
 
export default Marcador;