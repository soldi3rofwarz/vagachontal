/* import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const {latitud1, longitud1,latitud2, longitud2,latitud3, longitud3, map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(latitud1,longitud1),
        L.latLng(latitud2, longitud2),
        L.latLng(latitud3, longitud3),]
    }).onAdd(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing); */




/* {latitud1, longitud1,latitud2, longitud2,latitud3, longitud3, map}
  var center={}
  if(latitud1&&longitud1){
      center={
          lat: latitud1,
          lng: longitud1}
 }else{ 
      center = {
          lat: 12.099375,
          lng: -85.369108,
    };
 }
 L.latLng(latitud1,longitud1),
    L.latLng(latitud2, longitud2),
    L.latLng(latitud3, longitud3), */