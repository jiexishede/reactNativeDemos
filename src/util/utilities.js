/** @providesModule Utilities */

'use strict'

import React from 'react';

import {
    Image,
    LayoutAnimation,
    Platform,
    UIManager,
    View
} from 'react-native'



export const ImageBaseUrl = 'http://118.178.194.193:8070/tumourfile/sysfile/getPicFile.do?fileSize=3&fileId=';

export function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1,                 //月份   
        "d+": date.getDate(),                    //日   
        "h+": date.getHours(),                   //小时   
        "m+": date.getMinutes(),                 //分   
        "s+": date.getSeconds(),                 //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

export function getAgeFromBirthday(birthday) {
    const age = (new Date()).getFullYear() - (new Date(birthday)).getFullYear();
    return age <= 0 ? 1 : age;
}

export function getCommonNavigationOptions(navigation, image, right, onPressTitle) {
    return {
        headerTitle: (<Image
            onStartShouldSetResponder={onPressTitle}
            style={{ marginTop: Platform.OS === 'ios' ? -2 : 18 }}
            source={image} />),
        headerStyle: {
            height: 64,
            backgroundColor: '#22a7f0'
        },
        
        headerRight: right
    }
}

export function renderTriangle(sideLength, style = null) {
    return (
        <View style={[{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: sideLength,
            borderRightWidth: sideLength,
            borderBottomWidth: sideLength,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent'
        }, style]} />
    );
}

export function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function useLayoutAnimationOnAndroid() {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function layoutEaseInEaseOut(duration = 555) {
    LayoutAnimation.configureNext({
        duration,
        create: {
            type: LayoutAnimation.Types.easeIn,
            property: LayoutAnimation.Properties.opacity
        },
        update: {
            type: LayoutAnimation.Types.easeOut,
            property: LayoutAnimation.Properties.opacity
        },
        delete: {
            type: LayoutAnimation.Types.easeOut,
            property: LayoutAnimation.Properties.opacity
        }
    });
}