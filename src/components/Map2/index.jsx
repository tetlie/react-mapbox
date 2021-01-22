import React, { useState, useEffect, useRef } from 'react';
import Mapbox from 'mapbox-gl';
import styled from 'styled-components'

import Button from '../Button'
import MapContainer from '../MapContainer'

export const Form = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  color: blue;
`;

export const Input = styled.input`
  margin: 1rem;
`;

function Map2() {

  const [longitudeInput, setLongitudeInput] = useState()
  const [longitude, setLongitude] = useState(12.492285)
  
  const [latitudeInput, setLatitudeInput] = useState()
  const [latitude, setLatitude] = useState(41.890466)

  Mapbox.accessToken = process.env.MAPBOX_API_KEY;

  let map;
  const mapElement = useRef(null);

  useEffect(() => {
    map = new Mapbox.Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 10,
      center: [ longitude, latitude ],
    });
  }, [longitude, latitude]);

  function handleInput(event) {
    setLongitudeInput(event.target.value);
    setLatitudeInput(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(longitudeInput)
    setLongitude(longitudeInput);
    setLatitude(latitudeInput);
  }
  
  return (
    <>
      <MapContainer ref={mapElement}></MapContainer>
      <Form name ="longitude-latitude-form" action="/">
        <Label htmlFor='longitude'>Longitude</Label>
        <Input 
          name='longitude'
          id='longitude'
          placeholder="Insert longitude"
          onChange={event => handleInput(event)}
        />
        <Label htmlFor='latitude'>Latitude</Label>
        <Input 
          name='latitude'
          id='latitude'
          placeholder="Insert latitude"
          onChange={event => handleInput(event)}
        />
        <Button onClick={event => handleClick(event)} type='submit'>Go</Button>
      </Form>
    </>
  )
};

export default Map2;