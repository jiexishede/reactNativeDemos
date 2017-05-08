/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  ListView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
}   from 'react-native';

const ItemView = ({title, onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
);

const {width} = Dimensions.get('window');

 class AwesomeProject extends Component {

  constructor(props) {
    super(props);
  }

  showService = () =>{
    console.log('click Left');
  }

  showReport = () => {
    console.log('click Right')
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.selectVItemsBox}>
            <ItemView title="left" onPress={this.showService}/>
            <ItemView title="right" onPress={this.showReport}/>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  item: {
    flex:1,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,

  },
  activeItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#1bbc9b',
  },
  itemTitle: {
    color: '#44c0fe',
    fontWeight:'900',
    fontSize: 16,
  },
  selectVItemsBox: {
    height:48,
    flexDirection:'row',
    width: width,
    backgroundColor: '#fff',
    justifyContent:'space-around',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
