import React, { useEffect, useRef } from 'react';
import Mapbox from 'mapbox-gl';

import MapContainer from '../MapContainer'

let map = null;
let marker = null;

const Map5 = () => {

  Mapbox.accessToken = process.env.MAPBOX_API_KEY;

  const mapElement = useRef(null);

  useEffect(() => {
    map = new Mapbox.Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 10,
      center: [12.492285, 41.890466]
    })
      .on('click', event => handleMapClick(event))

  }, []);

  const handleMapClick = event => {

    let el = document.createElement('div');
    el.style.display = 'block';
    el.style.height = '40px';
    el.style.width = '40px';
    el.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/4/4b/McDonald%27s_logo.svg")';
    el.style.backgroundSize = '40px 40px'
    el.addEventListener('click', event => console.log("Heihei"))

    const newMarker = new Mapbox.Marker(el)
      .setLngLat(event.lngLat);

    if (marker !== null) { marker.remove() };

    newMarker.addTo(map);
    marker = newMarker;

  };

  return (
    <>
      <MapContainer ref={mapElement}></MapContainer>
    </>
  )
};

export default Map5;