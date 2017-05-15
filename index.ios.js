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
  FlatList,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;


class  listHeaderView extends Component {

  render(){
    return (
        <View style={{width:'100%',height:60, backgroundColor:'brown'}}>
          <Text style={{color:'white',fontSize:18}}>Header</Text>
        </View>
    )

  }
}


class  listFooterView extends Component {

  render(){
    return (
        <View style={{width:'100%',height:40, backgroundColor:'red'}}>
          <Text style={{color:'white',fontSize:18}}>Footer</Text>
        </View>
    )

  }
}

class  seprateLineView extends  Component {

  render() {
    return (
        <View style={{height:2,backgroundColor:'#adadad'}}/>
    )

  }
}




export default class AwesomeProject extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: '肺部CT：肿瘤消失',
          time: '2017-1-21',
        }, {
          title: '首次随访：未发现肿瘤',
          time: '2016-12-1',
        }, {
          title: '第二阶段化疗：吉非替尼',
          time: '2016-9-10~2016-10-10',
        }, {
          title: '基因检测：EGFR基因19号外显子突变过长了吗?',
          time: '2016-8-9',
        }, {
          title: '首次化疗：CP方案',
          time: '2016-6-8~2016-7-7',
        }, {
          title: '病理：中低分化腺癌',
          time: '2016-6-7',
        }, {
          title: '左肺大部切除术、肺门淋巴结清扫',
          time: '2016-6-6',
        }, {
          title: '肺部CT：左肺门5cm结节',
          time: '2016-6-2',
        }, {
          title: '初发症状： 咳嗽2周',
          time: '2016-6-1',
        },
      ])
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.listBox}>
            <FlatList style={styles.listView}
                      ListHeaderComponent={listHeaderView}
                      ListFooterComponent={listFooterView}
                      ItemSeparatorComponent={seprateLineView}
                      extraData = { {headerText :'extraHeader', footerText:'extraFooter'}}
                data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}]}
                renderItem={({item,index}) => <Text style={[styles.itemTStyle,(index % 2) ? {  backgroundColor : 'blue'} : {backgroundColor:'white'}] }>{item.key}</Text>}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row-reverse',
    backgroundColor: '#ebf0f2',
  },
  listBox: {
    width:'50%',
    height:'50%',
    backgroundColor:'purple',
    justifyContent:'center',
    alignItems:'flex-start', 
  },
  listView: {
    backgroundColor:'green',
    width:'100%',
  },
  itemTStyle: {
    height:30,
    textAlign:"center",
  }

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
