import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './index.css'



const containerStyle = {
  width: '400px',
  height: '400px',
  marginLeft : '40%',
  marginTop : '15%',
};

const center = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
};

function MyComponent() {
 
  return (
  
    <LoadScript
      googleMapsApiKey="AIzaSyDqg87SGEJwn3MNZYzbYTtfNUMIvmlffiI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)