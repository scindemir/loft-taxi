import React, {Component} from 'react';
import {Header} from './Header';
import mapboxgl from 'mapbox-gl';


export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2FzaGFjaW5kZW1pciIsImEiOiJja2xtZjRmMGYwOHAyMnFxeWhuYWZ6ZXA5In0.Wf2x9omMLeo5zIyjPyd6_g";
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <>
    <header>
      <Header />
    </header>
    <div className="map-wrapper">
      <div data-testid="map" className="mapReal" ref={this.mapContainer} />
    </div>
    </>
  }
}