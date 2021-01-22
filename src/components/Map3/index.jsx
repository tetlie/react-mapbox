import React, { useState, useEffect, useRef } from 'react';
import Mapbox from 'mapbox-gl';

import Button from '../Button'
import MapContainer from '../MapContainer'

function Map3() {

  Mapbox.accessToken = process.env.MAPBOX_API_KEY;

  let map;
  const mapElement = useRef(null);

  useEffect(() => {
    map = new Mapbox.Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 16,
      center: [10.7522, 59.9139],
    });
  }, []);

  function handleClickOslo(){
    map.flyTo({
      center: [
        10.7522,
        59.9139
      ]
    })
  }
  function handleClickRome(){
    map.flyTo({
      center: [
        12.492285,
        41.890466
      ]
    })
  }
  function handleClickWashington(){
    map.flyTo({
      center: [
        -77.0364,
        38.8951
      ]
    })
  }

  function handleClickMyPosition(){
    navigator.geolocation.getCurrentPosition(minpos => {
      map.flyTo({
        center: [
          minpos.coords.longitude,
          minpos.coords.latitude
        ]
      })
    })
  }

  return (
    <>
      <MapContainer ref={mapElement}></MapContainer>
        <Button onClick={() => handleClickOslo()} type='submit'>Oslo</Button>
        <Button onClick={() => handleClickRome()} type='submit'>Rome</Button>
        <Button onClick={() => handleClickWashington()} type='submit'>Washington</Button>
        <Button onClick={() => handleClickMyPosition()} type='submit'>My position</Button>
    </>
  )
};

export default Map3;