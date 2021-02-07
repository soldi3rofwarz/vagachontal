import React from 'react';
import L from 'leaflet'
import icon from './../icon.svg'



export const IconLocation=L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon, 
    inconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35,35],
    className: 'LeafLet-icon',
})