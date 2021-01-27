import React, { useEffect, useRef } from 'react';
import Mapbox from 'mapbox-gl';

import MapContainer from '../MapContainer'

let map = null;
let marker = null;

export const geoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -88.24218749999999,
              15.728813770533966
            ],
            [
              -89.219970703125,
              15.0827316716058
            ],
            [
              -89.241943359375,
              14.859850400601037
            ],
            [
              -89.176025390625,
              14.615478234145261
            ],
            [
              -89.373779296875,
              14.43468021529728
            ],
            [
              -89.14306640625,
              14.275030445572817
            ],
            [
              -88.41796875,
              13.891411092746115
            ],
            [
              -87.835693359375,
              13.880745842025602
            ],
            [
              -87.791748046875,
              13.378931658431565
            ],
            [
              -87.62695312499999,
              13.165073873513025
            ],
            [
              -87.4072265625,
              12.95102921601837
            ],
            [
              -86.9677734375,
              12.97244201057838
            ],
            [
              -86.890869140625,
              13.239945499286312
            ],
            [
              -86.671142578125,
              13.31479411223821
            ],
            [
              -86.72607421875,
              13.742053062720384
            ],
            [
              -86.341552734375,
              13.742053062720384
            ],
            [
              -86.15478515625,
              14.040672893673618
            ],
            [
              -85.869140625,
              13.870080100685891
            ],
            [
              -85.133056640625,
              14.211138758545793
            ],
            [
              -85.045166015625,
              14.551684056143447
            ],
            [
              -84.891357421875,
              14.796127603627053
            ],
            [
              -84.5068359375,
              14.604847155053898
            ],
            [
              -84.122314453125,
              14.71113475887066
            ],
            [
              -83.199462890625,
              15.093339268117337
            ],
            [
              -84.19921875,
              15.834535741221565
            ],
            [
              -85.067138671875,
              16.06692895745012
            ],
            [
              -85.80322265625,
              16.003575733881327
            ],
            [
              -86.802978515625,
              15.813395760460585
            ],
            [
              -87.747802734375,
              15.908508237156719
            ],
            [
              -88.24218749999999,
              15.728813770533966
            ]
          ]
        ]
      }
    }
  ]
};

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
      .on('load', () => {
        map.addSource('honduras', {
          type: 'geojson',
          data: geoJSON, // variablen med geojson-data
        });
        map.addLayer({
          id: 'honduras-layer',
          type: 'fill',
          source: 'honduras', // samme som id fra addSource
          layer: {}, // tomt, ønsker ikke å endre
          paint: {
            'fill-color': '#00c',
            'fill-opacity': 0.2,
          }
        });
      });

  }, []);


  return (
    <>
      <MapContainer ref={mapElement}></MapContainer>
    </>
  )
};

export default Map6;