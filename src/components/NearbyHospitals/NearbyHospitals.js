import React, { Component } from 'react'
import axios from 'axios'
import './NearbyHospitals.css';

class NearbyHospitals extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
      client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
      query: "doctor",
      near: "Delhi",
      v: "20182507"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.renderMap())
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })

  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 28.5672, lng: 77.2100},
      zoom: 12
    })

    var infowindow = new window.google.maps.InfoWindow()

    this.state.venues.map(myVenue => {

      var contentString = `${myVenue.venue.name}`

      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })

      marker.addListener('click', function() {

        infowindow.setContent(contentString)

        infowindow.open(map, marker)
      })

    })

  }
    render() {
        return (
          <>
           <form className="searchbox">
             <input type="search" placeholder="Search for Doctor" />
             <button type="submit" value="search">&nbsp;</button>
         </form>
          <main>
            <div id="map"></div>
          </main>
         </>
        )
      }
    }

    function loadScript(url) {
        var index  = window.document.getElementsByTagName("script")[0]
        var script = window.document.createElement("script")
        script.src = url
        script.async = true
        script.defer = true
        index.parentNode.insertBefore(script, index)
      }

export default NearbyHospitals;
