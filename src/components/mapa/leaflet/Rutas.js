/* import React from 'react'
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";

const Routing =({latitud, longitud, map})=>{ 

  var center={}
  if(latitud&&longitud){
      center={
          lat: latitud,
          lng: longitud}
 }else{
      center = {
          lat: 12.099375,
          lng: -85.369108,
    };
 }
 

 let leafletElement = L.Routing.control({
  waypoints: [
    L.latLng(12.099375,-85.369108),
    L.latLng(11.099379, -85.369110),
  ],
   router: new L.Routing.Google(),
  lineOptions: {
    styles: [
      {
        color: "green",
        opacity: 0.6,
        weight: 4
      }
    ]
  },
  addWaypoints: false,
  draggableWaypoints: false,
  fitSelectedRoutes: false,
  showAlternatives: false
}).addWaypoints(map.leafletElement);
return leafletElement.getPlan();
}
 

export default Routing */

/* import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";

export const Rutas = L.Routing.Control({
  waypoints: [
    L.latLng(12.099375,-85.369108),
    L.latLng(11.099379, -85.369110)
  ]
}) */