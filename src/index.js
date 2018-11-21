import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState
        this.setState({
          lat: position.coords.latitude
        })
      },
      (err) => {
        this.setState({
          errorMessage: err.message
        })
      }
    );


  }

  render() {
      {/*<div>Latitude: {this.state.lat}
        <br />
        { this.state.errorMessage !== '' ? `Error: ${this.state.errorMessage}` : null }
      </div> */}
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }

      if (!this.state.errorMessage && this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>;
      }
      return <div>Loading!</div>;
  }
}


ReactDOM.render(
  <App />, document.getElementById('root')
)
