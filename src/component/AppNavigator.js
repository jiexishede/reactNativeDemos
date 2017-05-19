/** @providesModule AppNavigator */

import React from 'react';
import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import iOSTempScreen from './iOSTempScreen';

import TabIcon from './TabIcon';


const { width, height, scale } = Dimensions.get('window');
const styles = StyleSheet.create({
    stack: {
        backgroundColor: 'rgba(255,255,255,1.0)',
    },
    headerStyle: {
        height: 64,
        width: width,
        opacity: 1,
        backgroundColor: '#22A7F0'
    },
    headerTitleStyle: {
        // fontFamily: 'PingFang SC',
        color: 'white',
        fontSize: 22,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 0,
    },
});

const tabscreen = (screen, path, label, src) => {
    return {
        screen, path,
        navigationOptions: {
            tabBarLabel: label,
            tabBarIcon: ({ tintColor,
                focused = true
                }) => (<TabIcon src={src} active={focused} />),
        }
    };
};

const MainTab = TabNavigator({
    Home: tabscreen(iOSTempScreen, '/iOSTempScreen', '测试', 'home'),
    // Patient: tabscreen(PatientScreen, '/patient', '患者', 'patient'),
    // Doctor: tabscreen(DoctorScreen, '/doctor', '医生', 'doctor'),
    // Profile: tabscreen(ProfileScreen, '/profile', '我', 'profile'),
}, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazyLoad: true,
        //...other configs
        tabBarOptions: {
            // tint color is passed to text and icons (if enabled) on the tab bar
            activeTintColor: '#22A7F0',
            inactiveTintColor: '#9B9B9B',
            showIcon: true,
            style: {
                backgroundColor: '#F4F4F4',
                borderTopWidth: 0,
                height: 49
            },
            labelStyle: {
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 1.5
            }
        }
    });

const AppNavigator = StackNavigator({
    Main: {
        screen: MainTab,
        path: '/',
        navigationOptions: {
            // title: '首页',
            header: null,
            headerVisible: false,
            gesturesEnabled: false,
        }
    },
    
}, {
        initialRouteName: 'Main',
        mode: 'card',
        headerMode: 'screen',
        navigationOptions: {
            headerVisible: false,
            gesturesEnabled: true,
            headerStyle: styles.stack,
        }
    });

export default AppNavigator;
