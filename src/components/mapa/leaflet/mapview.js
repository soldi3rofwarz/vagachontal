import React,{useEffect, useState} from 'react'
import './mapview.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Popup,Polyline,Marker } from 'react-leaflet'
import Marcador from './Marker'
import {Rutas} from './Rutas'
import L from "leaflet";
import "leaflet-routing-machine";
import Icon from './icon.svg'

const MapView = ({latitud1, longitud1,latitud2, longitud2,latitud3, longitud3}) => {


    const mapRef =React.useRef
    
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
      }, []);

    var geo={}
        if(latitud2&&longitud2){
            geo = {
                lat: latitud2,
                lng: longitud2}
       }else{
            geo = {
                lat: 12.099375,
                lng: -85.369108,
          };
       }
       const linea=[[latitud1, longitud1], [latitud2, longitud2],[latitud3, longitud3]]
  
    
    
   console.log('holoa', latitud2, longitud2)
    return ( 
        <MapContainer center={geo} zoom={13} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">VagaChontal</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={{lat:latitud2, lng:longitud2}} icon={Icon}/>
                <Polyline positions={linea}/>

              
             
            
        </MapContainer> 
        
    );
}
 
export default MapView;