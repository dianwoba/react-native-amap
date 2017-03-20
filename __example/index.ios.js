import React from 'react';
import { AppRegistry } from 'react-native';

var App = require('./App');

class AirMapsExplorer extends React.Component {
  render() {
    return <App />
  }
};

AppRegistry.registerComponent('AirMapsExplorer', () => AirMapsExplorer);
