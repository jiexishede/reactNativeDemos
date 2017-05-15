/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  
} from 'react-native';

export default class AwesomeProject extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.hollowWordText}>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  hollowWordText: {
    color: 'white',
    fontSize:52,
  }

                          
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
