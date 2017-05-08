/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;


export default class AwesomeProject extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
       imageArray1: [
         {
           url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
           description: 'React Logo'
         },
       ],
      imageArray2: [
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
      ],
    };
  }

  renderRow = (tempArray) => {

    const imageStyleNumber = tempArray.length;
    let imageStyleString;
    switch (imageStyleNumber) {
      case 1:
        imageStyleString = `imgView1`;
        break;
      default:
        imageStyleString = `imgView9`;
    }

    return tempArray.map((item, index) => {
      if(index > 8){
        return ;
      }
      return (
          <View  key={index} style={styles[imageStyleString]}>
            <Image style={styles.imgIstyle} source={{uri: item.url}}/>
            <Text style={styles.imgTDesc}>{item.description}</Text>
          </View>
      )
    })
  }

  render() {
    
    return (

          <ScrollView style={styles.container}>
            
            <View style={styles.rowVImageBox}>

              {this.renderRow(this.state.imageArray1)}

            </View>

          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0f2',
  },

  rowVImageBox: {
    flexDirection:'row',
    flexWrap:'wrap',
    width: 300,
    height: 300,
    marginBottom:100,
  },
  rowVImageBox2: {
    flexDirection:'row',
    flexWrap:'wrap',
    width: 300,
    height: 300,
    marginBottom:100,
    backgroundColor:'blue',
  },
  imgView1: {
    width:290,
    height:290,
    marginRight:5,
    marginBottom:5,
  },
  imgView2: {
    width:140,
    height:290,
    marginRight:5,
    marginBottom:5,
  },
  imgIstyle:{
    width:'100%',
    height:'70%',
    backgroundColor:'yellow',
  },
  imgTDesc: {
    flex:2,
    backgroundColor:'white'
  }


});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
