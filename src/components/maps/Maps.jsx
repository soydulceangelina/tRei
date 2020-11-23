import React, { useState } from 'react';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from 'react-google-maps';

import { PLACES_DATA } from '../../db/places';
import treintaIcon from '../../assets/treinta-icon.png';
import { shuffleArray } from '../../utils/array-helpers';
import theme from '../../styles/maps/theme.json';

const placesData = shuffleArray(PLACES_DATA)
  .slice(0, 25)
  .map((place) => ({ ...place, isMarkerInfoOpen: false }));

const MAPA_CENTER = { lat: 4.656638471923736, lng: -74.09170475694387 };

const MapsComponent = () => {
  const [places, setPlaces] = useState(placesData);

  const iconMarker = new window.google.maps.MarkerImage(
    treintaIcon,
    null,
    null,
    null,
    new window.google.maps.Size(32, 32),
  );

  const toggleMarkerInfo = (id) => () => {
    setPlaces((prevState) => prevState.map((place) => {
      if (place.placeId === id) {
        return {
          ...place,
          isMarkerInfoOpen: !place.isMarkerInfoOpen,
        };
      }
      return place;
    }));
  };

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={MAPA_CENTER}
      options={{
        styles: theme,
      }}
    >
      {places.map((place) => (
        <Marker
          key={place.placeId}
          position={place.geometry.location}
          icon={iconMarker}
          onClick={toggleMarkerInfo(place.placeId)}
        >
          {place.isMarkerInfoOpen && (
          <InfoWindow onCloseClick={toggleMarkerInfo(place.placeId)}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <img
                src={place.icon}
                alt=""
              />
              <p>{place.name}</p>
              <p>{place.formattedAddress}</p>
            </div>
          </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};

export const Maps = withScriptjs(withGoogleMap(MapsComponent));
