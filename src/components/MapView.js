import map from "../assets/images/map.png"; // relative path to image
import React, { useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import fetchFakeData from './MapView/fetchFakeData';
//import Marker from './MapView/Marker'; unused marker
import Popup from './MapView/Popup';

// for using maps you need to install ->  npm install mapbox-gl --save
// install for search feild -> npm install --save @mapbox/mapbox-gl-geocoder
//install readdom -> npm install react react-dom

var ReactDOM = require('react-dom');
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuYWVzcGxhc2giLCJhIjoiY2tmYTlwMWpmMHR0cDJ0cHAyOHZhd3V0MSJ9.PmRGRrM4p1wgKavJKm-56A'


const MapView = ({searchString}) => {
  console.log(`${searchString} was given to MapView`);
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: [20, 0] }));
  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  });
  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.9876, 51.7405],
      zoom: 12.5,
    });
  
    // add navigation control (the +/- zoom buttons) and geolocate user
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    map.addControl(geolocate.on('geolocate', function (e) {
      var lon = e.coords.longitude;
      var lat = e.coords.latitude
      var position = [lon, lat];
      // console.log(position);

    })
    );
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );

    map.on("load", () => {
      // add the data source for new a feature collection with no features
     // geolocate.trigger(); -> use when the search button is triggered 
      map.addSource("random-points-data", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });
      // now add the layer, and reference the data source above by name
      map.addLayer({
        id: "random-points-layer",
        source: "random-points-data",
        type: "symbol",
        layout: {
          // full list of icons here: https://labs.mapbox.com/maki-icons
          "icon-image": "drinking-water-15",
          "icon-padding": 0,
          'icon-size': 1.5,
          "icon-allow-overlap": true
        }
      });
    
    });

    map.on("moveend", async () => {
      // get new center coordinates
      const { lng, lat } = map.getCenter();
      // fetch new data
      const results = await fetchFakeData({ longitude: lng, latitude: lat });
      // update "random-points-data" source with new data
      // all layers that consume the "random-points-data" data source will be updated automatically
      map.getSource("random-points-data").setData(results);
    });

    // change cursor to pointer when user hovers over a clickable feature
    map.on("mouseenter", "random-points-layer", e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on("mouseleave", "random-points-layer", () => {
      map.getCanvas().style.cursor = "";
    });

    // add popup when user clicks a point
    map.on("click", "random-points-layer", e => {
      if (e.features.length) {
        const feature = e.features[0];
        // create popup node
        const popupNode = document.createElement("div");
        ReactDOM.render(<Popup feature={feature} />, popupNode);
        // set popup on map
        popUpRef.current
          .setLngLat(feature.geometry.coordinates)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    });

    // map.on('moveend', async () => {
    //   // get center coordinates
    //   const { lng, lat } = map.getCenter();
    //   // fetch new data
    //   const results = await fetchFakeData({ longitude: lng, latitude: lat });
    //   // iterate through the feature collection and append marker to the map for each feature
    //   results.features.forEach(result => {
    //     const { id, geometry } = result;
    //     // create marker node
    //     const markerNode = document.createElement('div');
    //     ReactDOM.render(<Marker id={id} />, markerNode);
    //     // add marker to map
    //     new mapboxgl.Marker(markerNode)
    //       .setLngLat(geometry.coordinates)
    //       .addTo(map);
    //   });
    // });

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default MapView;