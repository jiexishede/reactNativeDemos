'use strict'

import axios from 'axios';

import querystring from 'querystring';

import Actions from 'Actions';

global.axiosClient = axios.create({
    baseURL: 'http://118.178.194.193:9980/zlapi',
    withCredentials: true,
    responseType: 'json',
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [data => {
        if (data) {
            data.token = global.reduxStore.getState().account.token;
        }
        else {
            data = {
                token: global.reduxStore.getState().account.token
            }
        }
        return querystring.stringify(data);
    }],
    transformResponse: [data => {
        // token issue
        // if (data.res_code <= -900) {
        //     if (global.reduxStore) {
        //         global.reduxStore.dispatch(Actions.logout());
        //     }
        // }
        return data;
    }],
});