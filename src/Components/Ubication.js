import React, { Component } from 'react';

class Ubication extends Component {

  componentDidMount() {
    var map;
        
    function initMap() {
      var myPosition = new google.maps.LatLng(40.744654,-3.6027866);
      map = new google.maps.Map(document.getElementById('map'), {
        center: myPosition,
        zoom: 8
      });

      var marker = new google.maps.Marker({
        position: myPosition,
        title:"Hello World!"
      });

      // To add the marker to the map, call setMap();
      marker.setMap(map);
    }
    initMap();
  }

  render() {
    return (
      <div>
        Mi Ubicación
      <div id="map" className="card bg-dark text-white">
        Google Map
      </div>
      </div>
    )
  }
}


export default Ubication;