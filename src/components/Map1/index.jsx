import React, { useEffect, useRef } from 'react';
import Mapbox, { MapboxMap } from 'mapbox-gl';

import Button from '../Button'
import MapContainer from '../MapContainer'


function Map1() {

  Mapbox.accessToken = process.env.MAPBOX_API_KEY;

  let map;
  const mapElement = useRef(null);

  useEffect(() => {
    map = new Mapbox.Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 16,
      center: [12.492285, 41.890466]
    });
  }, []);
  

  return (
    <>
      <MapContainer ref={mapElement}></MapContainer>
      <Button>Night Mode</Button>
    </>
  )
};

export default Map1;