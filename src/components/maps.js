import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoibWVkYW1hbiIsImEiOiJjamxlOGFuZmowamVjM3BwYjI2c2ZuNmJsIn0.bG5-dtwItZOqzM_wPqHUkg';

class Map extends Component {

  state = {
    viewport: {
      width: 160,
      height: 160,
      latitude: this.props.lat,
      longitude: this.props.lon,
      zoom: 8
    }
  };

  render() {
    return (
      <div className='map'>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
          mapboxApiAccessToken={TOKEN}
        />
      </div>
    );
  }
}

export default Map;