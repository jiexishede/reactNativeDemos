import React from 'react';
import {Image, StyleSheet} from 'react-native';

const TabIcon = ({ src, active = false }) => {
  let icon = require('../../img/home-on.png');
  switch (src) {
    case 'home':
      icon = active ? require('../../img/home-on.png') : require('../../img/home.png');
      break;
    case 'patient':
      icon = active ? require('../../img/patient-on.png') : require('../../img/patient.png');
      break;
    case 'doctor':
      icon = active ? require('../../img/doctor-on.png') : require('../../img/doctor.png');
      break;
    case 'profile':
      icon = active ? require('../../img/profile-on.png') : require('../../img/profile.png');
      break;
    default:
  }
  return(
  <Image source={icon} style={[styles.icon]}/>);
};

TabIcon.propTypes = {
     src: React.PropTypes.string,
     //active: React.propTypes.bool
};

const styles = StyleSheet.create({
  icon: {

  }
});

export default TabIcon;
