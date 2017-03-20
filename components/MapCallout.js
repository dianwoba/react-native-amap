
import React, {PropTypes} from 'react';
import {
  View,
  NativeMethodsMixin,
  requireNativeComponent,
  StyleSheet,
} from 'react-native';

class MapCallout extends React.Component {
  // mixins: [NativeMethodsMixin],

  static propTypes= {
    ...View.propTypes,
    tooltip: PropTypes.bool,
    onPress: PropTypes.func,
  }

  static defaultProps= {
      tooltip: false,
  }

  render() {
    return <AMapCallout {...this.props} style={[styles.callout, this.props.style]} />;
  }
};

var styles = StyleSheet.create({
  callout: {
    position: 'absolute',
    //flex: 0,
    //backgroundColor: 'transparent',
  },
});

export default requireNativeComponent('AMapCallout', MapCallout);
