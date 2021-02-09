import React from 'react'
import GoogleMapReact from 'google-map-react';
import Footer from '../Footer/Footer'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map =()=>{

    let points ={
        center: {
            lat: 59.95,
            lng: 30.33
          },
          zoom: 11
    }

    return (

        <div style={{ height: '50vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:'' }}
            defaultCenter={points.center}
            defaultZoom={points.zoom}
          >
            <AnyReactComponent
              lat={48.6931}
              lng={2.2948}
              text="My Marker"
            />
          </GoogleMapReact>
          <Footer/>
        </div>

      );
};

export default Map;