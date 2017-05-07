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
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;


export default class AwesomeProject extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: '王伦',
          department: '胸外科',
          degree:'主任医师 / 教授',
          score:'9.8',
          hospital:'上海市第一人民医院',
          skill:'肺、食管、贲门、纵隔、胸膜肿瘤的…',
          diagnoseCount:'488',
          charge:'3000',
          fee:'200',
        }, {
          name: '王伦',
          department: '胸外科',
          degree:'主任医师 / 教授',
          score:'9.8',
          hospital:'上海市第一人民医院',
          skill:'肺、食管、贲门、纵隔、胸膜肿瘤的…',
          diagnoseCount:'488',
          charge:'3000',
          fee:'200',
        }, {
          name: '王伦',
          department: '胸外科',
          degree:'主任医师 / 教授',
          score:'9.8',
          hospital:'上海市第一人民医院',
          skill:'肺、食管、贲门、纵隔、胸膜肿瘤的…',
          diagnoseCount:'488',
          charge:'3000',
          fee:'200',
        }, {
          name: '王伦',
          department: '胸外科',
          degree:'主任医师 / 教授',
          score:'9.8',
          hospital:'上海市第一人民医院',
          skill:'肺、食管、贲门、纵隔、胸膜肿瘤的…',
          diagnoseCount:'488',
          charge:'3000',
          fee:'200',
        },
      ])
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.listViewBox}>
            <ListView style={{flex: 1}}
                      dataSource={this.state.dataSource} renderRow={
              (rowData, sectionID, rowID, highlightRow) => {
                  return (
                      <View style={styles.listStyle}>
                        <View style={styles.leftHeaderView}>
                          <Image style={styles.headerImage} source={require('./image/yianRowHeader.png')}></Image>
                        </View>
                        <View style={styles.rowVContent}>
                          <View style={styles.rowVContentTop}>
                            <View style={styles.rowVTopTextBox}>
                              <Text style={styles.rowTName} numberOfLines={1}
                                    ellipsizeMode={'tail'}>{rowData.name}</Text>
                              <Text style={styles.rowTDepartment} numberOfLines={1}
                                    ellipsizeMode={'tail'}>{rowData.department}</Text>
                              <Text style={styles.rowTDegree} numberOfLines={1}
                                    ellipsizeMode={'tail'}>{rowData.degree}</Text>
                            </View>               
                            <View style={styles.rowVTopScore}>
                                <Image style={styles.rowIScore} source={require('./image/starScore.png')}></Image>
                              <Text style={styles.rowTScore} numberOfLines={1}
                                    ellipsizeMode={'tail'}>{rowData.score}</Text>
                            </View>
                          </View>
                          <Text style={styles.rowTHospital} numberOfLines={1}
                                ellipsizeMode={'tail'}>{rowData.hospital}</Text>
                          <Text style={styles.rowTSkill} numberOfLines={1}
                                ellipsizeMode={'tail'}>{`擅长：${rowData.skill}`}</Text>
                          <Text style={styles.rowTdiagnoseCount}>{`问诊量 ${rowData.diagnoseCount}`}</Text>
                          <View style={styles.cellBottomLine}></View>
                          <View style={styles.bottomView}>
                            <View style={styles.bottomViewBox}>
                              <Image style={styles.bottomIDocument} source={(require(`./image/yiAnDocument.png`))}></Image>
                              <Text style={styles.bottomTText}>{`￥ ${rowData.charge}/年`}</Text>
                            </View>
                            <View style={styles.bottomViewBox}>
                              <Image style={styles.bottomIPhone} source={(require(`./image/yiAnPhone.png`))}></Image>
                              <Text style={styles.bottomTText}>{`￥ ${rowData.fee}`}</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                  );
              }
            }/>
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
    backgroundColor: '#ebf0f2',
  },
  listViewBox: {
    marginTop: 6,
    flex: 7,
    width: deviceWidth,
  },
  listStyle: {
    flexDirection: 'row',
    height: 148,
    backgroundColor: '#ffffff',
  },
  rowVContent: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  leftHeaderView: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  headerImage: {
    width: 49,
    height: 49,
  },
  rowVContentTop: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  rowVTopTextBox: {
    width:'60%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline',
  },
  rowTName: {
    fontFamily: 'STHeitiSC-Medium',
    color:'#00326D',
    fontWeight:'900',
    fontSize:15,
  },
  rowTDepartment: {
    fontFamily: 'STHeitiSC-Medium',
    fontSize:12.5,
    fontWeight:'700',
    color:'#323232',
  },
  rowTDegree: {
    fontSize:12.5,
    fontWeight:'700',
    color:'#323232',
  },
  rowTHospital: {
    fontSize:12.5,
    fontWeight:'700',
    color:'#323232',
  },
  rowVTopScore: {
    marginRight:15,
    flexDirection:'row',
    alignItems:'center'
  },
  rowIScore: {
     width:9,
     height:9,
  },
  rowTScore: {
    fontFamily: 'STHeitiSC-Medium',
    color:'#FFB400',
    fontSize:15,
  },
  rowTSkill: {
    fontFamily: 'STHeitiSC-Medium',
    fontSize:12.5,
    fontWeight:'700',
    color:'#9B9B9B',
    marginRight:40,
  },
  rowTdiagnoseCount: {
    fontFamily: 'STHeitiSC-Medium',
    fontSize:12.5,
    fontWeight:'700',
    color:'#9B9B9B',
  },
  cellBottomLine: {
    width:'100%',
    height:1,
    backgroundColor:'#DADADA'
  },
  bottomView: {
    flexDirection:'row',
    width:'70%',
    justifyContent:'space-around'
  },
  bottomIDocument: {
    width:13,
    height:16,
  },
  bottomViewBox: {
    flex:1,
    flexDirection:'row',
  },
  bottomIPhone: {
    width:15,
    height:15,
  },
  bottomTText: {
    fontFamily: 'STHeitiSC-Medium',
    fontSize:12.5,
    fontWeight:'700',
    color:'#9B9B9B',
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
