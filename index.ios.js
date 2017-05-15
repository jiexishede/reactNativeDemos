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
  WebView,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class AwesomeProject extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   
  }

  render() {
    return (
      <View style={styles.container}>
        <Text  style={styles.textSTyle}>Hellow world</Text>
        {/*<View style={{width:width,height:390, backgroundColor:'red'}}>*/}
          <WebView
              source={{uri: 'http://localhost:63342/AwesomeProject/testHtml.html?_ijt=r1o26jv0n7te15n3lbfblsmvhs'}}
              style={styles.webStyle}
          />

        {/*</View>*/}
           <Text  style={styles.textSTyle}>Hellow world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webStyle: {
    flex:1,
    width:width,
    // height:300,
    backgroundColor:'red',
  },
  textSTyle: {

    color:'green',
    backgroundColor:"#fafece"
  }

                          
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
