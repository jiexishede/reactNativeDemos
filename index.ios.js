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
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class AwesomeProject extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      name:'阿里云',
      time:'2017-06-04 12:23:22'
    }
  }

  webview: WebView


  btnClick= ()=> {
    this.webview.postMessage(JSON.stringify({
      name:'阿里云',
      time:'2017-06-04 12:12:33'
    }));
  }

  handleMessage = (evt: any) => {
    const message = JSON.parse(evt.nativeEvent.data)

    if (message.command === 'get info') {
      const nickname = message.payload.nickname
      // 得到了数据随你怎么办吧
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text  style={styles.textSTyle}>Hellow world</Text>
          {/*<View style={{width:width,height:390, backgroundColor:'red'}}>*/}
          <WebView
              ref={w => this.webview = w}
              source={{uri: 'http://localhost:63342/AwesomeProject/testHtml.html?_ijt=kcalhjj5a1bohcr7bvmtsmgcg0'}}
              onMessage={this.handleMessage}
              style={styles.webStyle}
          />

          {/*</View>*/}
          <Text  style={styles.textSTyle}>Hellow world</Text>
          <TouchableOpacity onPress={this.btnClick}>
                             <Text style={styles.btnClick}> 点击</Text>
          </TouchableOpacity>
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
  },
  btnClick: {
    width:50,
    height:250,
    backgroundColor:'pink'
  }


});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
