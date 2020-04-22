import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./footer-maps.css";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 10.7600909,
      lng: 78.8178183,
    },
    zoom: 16,
  };

  renderMarkers(map, maps) {
    new maps.Marker({
      position: {
        lat: 10.7600909,
        lng: 78.8178183,
      },
      map,
      title: "Spider Labs, CSE Department",
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="maps-style">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAVcA8AwyUkedvJlnEcXF5BFUaq7d5IbUo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
