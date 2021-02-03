import React,{useEffect, useState} from 'react'
import './mapview.css'
import 'leaflet/dist/leaflet.css'
import { Map, TileLayer,Polyline, } from 'react-leaflet'
import Marcador from './Marker'
import Routing from './Rutas'
import L from "leaflet";
import "leaflet-routing-machine";


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
  
    
    
   console.log('holoa', latitud3, longitud3)
    return ( 
        <Map center={geo} zoom={13}  ref={onMapLoad}>
            <TileLayer
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
                <Marcador latitud1={latitud1} longitud1={longitud1}
                    latitud2={latitud2} longitud2={longitud2}
                    latitud3={latitud3} longitud3={longitud3}
                />
                <Polyline positions={linea}/>

              {/*   <Routing
              latitud1={latitud1} longitud1={longitud1}
              latitud2={latitud2} longitud2={longitud2}
              latitud3={latitud3} longitud3={longitud3} map={mapRef}
              />  
              */}
            
        </Map> 
        
    );
}
 
export default MapView;