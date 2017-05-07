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
      imageArray3: [
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
      ],
      imageArray4: [
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },

      ],
      imageArray6: [
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },

      ],
      imageArray11: [
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
        {
          url: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg',
          description: 'React Logo'
        },
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
      case 2:
        imageStyleString = `imgView2`;
        break;
      case 3:
        imageStyleString = `imgView3`;
        break;
      case 4:
        imageStyleString = `imgView4`;
        break;
      case 5:
      case 6:
        imageStyleString = `imgView6`;
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
            <Image style={styles.imgIstyle} source={{uri: item.url}}></Image>
            <Text style={styles.imgTDesc}>{item.description}</Text>
          </View>
      )
    })
  }

  render() {
    let imageStyleString = '';
    const imageStyleNumber = this.state.imageArray11.length;
    switch (imageStyleNumber) {
      case 1:
        imageStyleString = `imgView1`;
        break;
      case 2:
        imageStyleString = `imgView2`;
        break;
      case 3:
        imageStyleString = `imgView3`;
        break;
      case 4:
        imageStyleString = `imgView4`;
        break;
      case 5:
      case 6:
        imageStyleString = `imgView6`;
        break;
      default:
        imageStyleString = `imgView9`;
    }
    return (
        <ScrollView style={styles.container}>


          <Image resizeMode="contain" style={{width:70,height:100,backgroundColor:'red'}} source={{uri: 'http://insights.ubuntu.com/wp-content/uploads/8063/react-native-logo.jpg'}}
          ></Image>

          <View style={styles.rowVImageBox}>

            {this.renderRow(this.state.imageArray1)}

          </View>

          <View style={styles.rowVImageBox2}>

            {this.renderRow(this.state.imageArray2)}
            
          </View>

          <View style={styles.rowVImageBox}>

            {this.renderRow(this.state.imageArray3)}

          </View>

          <View style={styles.rowVImageBox2}>

            {this.renderRow(this.state.imageArray4)}

          </View>

          <View style={styles.rowVImageBox}>

            {this.renderRow(this.state.imageArray6)}

          </View>


          <View style={styles.rowVImageBox2}>

            {this.renderRow(this.state.imageArray11)}
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
    backgroundColor:'red',
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
  imgView3: {
    width:90,
    height:290,
    marginRight:5,
    marginBottom:5,
  },
  imgView4: {
    width:140,
    height:140,
    marginRight:5,
    marginBottom:5,
  },
  imgView6: {
    width:90,
    height:140,
    marginRight:5,
    marginBottom:5,
  },
  imgView9: {
    width:90,
    height:90,
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
