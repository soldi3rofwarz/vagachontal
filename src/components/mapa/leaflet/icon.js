import React from 'react';
import L from 'leaflet'
import Icon from './icon.svg'


export const IconLocation=L.icon({
    iconUrl: {Icon},
    iconRetinaUrl: {Icon}, 
    inconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35,35],
    className: 'LeafLet-venue-icon',
})