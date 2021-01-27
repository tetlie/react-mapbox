import React, { useEffect, useRef } from 'react';
import Mapbox from 'mapbox-gl';

import MapContainer from '../MapContainer'

let map = null;
let marker = null;

const Map6 = () => {

  Mapbox.accessToken = process.env.MAPBOX_API_KEY;

  const mapElement = useRef(null);

  useEffect(() => {
    map = new Mapbox.Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 5,
      center: [12.492285, 41.890466]
    })

  }, []);


  return (
    <>
      <MapContainer ref={mapElement}></MapContainer>
    </>
  )
};

export default Map6;