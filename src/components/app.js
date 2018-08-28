import React, { Component } from 'react';
import Header from '../components/header'
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
