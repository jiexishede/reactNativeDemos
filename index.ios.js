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
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title:'肺部CT：肿瘤消失',
          time:'2017-1-21',
        },{
          title:'首次随访：未发现肿瘤',
          time:'2016-12-1',
        },{
          title:'第二阶段化疗：吉非替尼',
          time:'2016-9-10~2016-10-10',
        },{
          title:'基因检测：EGFR基因19号外显子突变...',
          time:'2016-8-9',
        },{
          title:'首次化疗：CP方案',
          time:'2016-6-8~2016-7-7',
        },{
          title:'病理：中低分化腺癌',
          time:'2016-6-7',
        },{
          title:'左肺大部切除术、肺门淋巴结清扫',
          time:'2016-6-6',
        },{
          title:'肺部CT：左肺门5cm结节',
          time:'2016-6-2',
        },{
          title:'初发症状： 咳嗽2周',
          time:'2016-6-1',
        },
      ])
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.flexTop}>
            <View style={{flex:2,justifyContent:'center',flexDirection:'row',marginRight:10}}>
              <Image style={{width:55,height:55,resizeMode:'contain',flex:1,justifyContent:'center',alignItems:'center'}} source={require('./image/Oval.png')}>
                <Image style={{width:48,height:48,resizeMode:'contain'}} source={require('./image/Bitmap.png')} />
              </Image>
            </View>
            <View style={{flex:7,flexDirection:'column',justifyContent:'center',alignSelf:'flex-start'}}>
              <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{flex:3.6,}}>张初华</Text>
                <Text style={{flex:1}}>男</Text>
                <Text style={{flex:8,}}>55岁</Text>
              </View>
              <Text style={{flex:1}} numberOfLines={1}
                    ellipsizeMode={'tail'}>右上肺未分化癌 ⅢA期</Text>
              <Text style={{flex:1}} numberOfLines={1}
                    ellipsizeMode={'tail'} >简要病史：检查发现颅内占位1+月。</Text>
            </View>
          </View>
        </View>
        <ListView style={styles.listStyle} dataSource={this.state.dataSource} renderRow={
          (rowData,sectionID, rowID,highlightRow) => {

            if (rowID === "0" ) {
              return (
                  <View style={styles.cellStyle}>
                    <Text style={
                      styles.highLightTitleStyle
                    } numberOfLines={1}
                          ellipsizeMode={'tail'}>{rowData.title}</Text>
                    <Text style={
                      styles.highLightTimeStyle
                    }>{rowData.time}</Text>
                    <View style={styles.lineStyle}></View>
                  </View>
              );
            } else {
              return (
                  <View style={styles.cellStyle}>
                    <Text style={
                      styles.titleStyle
                    } numberOfLines={1}
                          ellipsizeMode={'tail'}>{rowData.title}</Text>
                    <Text
                        style={
                          styles.timeStyle
                        }>{rowData.time}</Text>
                    <View style={styles.lineStyle}></View>
                  </View>
              );
            }
          }
        }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebf0f2',
  },

  topView: {
    backgroundColor:'#ffffff',
    marginTop:104,
    width:375,
    height:76,
    flexDirection:'row',
  },
  flexTop: {
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
  },
  listStyle:{
    marginTop:6,
    marginLeft:52,
    width:316.5,
    height:513,
  },
  cellStyle: {
    backgroundColor:'#ffffff',
    justifyContent: 'center',
    flex: 1,
    height:59,
  },
  lineStyle: {
    marginTop:9,
    backgroundColor:'#DDDDDD',
    height:1,
  },
  highLightTitleStyle: {
    color: '#2bb063',
    fontSize:16,
    flexWrap:'nowrap',
    fontWeight:"900",
  },
  highLightTimeStyle: {
    color: '#2bb063',
    fontSize:16,
    flexWrap:'nowrap',
    paddingTop:1,
  },

  titleStyle: {
    textAlign:'left',
    fontWeight:"900",
    textAlignVertical:'center',
    color:'#9e9e9e',
    fontSize:16,
    flexWrap:'nowrap',
    // backgroundColor:'green'
    // fontFamily:'So',
    
  },
  timeStyle: {
    color:'#a3a3a3',
    fontSize:12,
    fontFamily:'STHeitiSC-Medium',
    paddingTop:1,
    // backgroundColor:'yellow'
  }                        
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
