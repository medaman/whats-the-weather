import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
//import GoogleMap from '../components/google_map';
import Maps from '../components/maps';
import _ from 'lodash';

class WeatherList extends Component {
  renderWeather(cityData) {
    if (cityData) {
      const name = cityData.city.name;
      const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp*(9/5) -459.67));
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      const { lon, lat } = cityData.city.coord;

      return (
        <tr key={name}>
          <td><Maps lon={lon} lat={lat} /></td>
          <td><Chart data={temps} color='orange' units='°F' /></td>
          <td><Chart data={pressures} color='green' units ='hPA' /></td>
          <td><Chart data={humidities} color='gray' units='%' /></td>
        </tr>
      )
    }
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPA) </th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);