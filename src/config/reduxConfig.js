'use strict'

import { AsyncStorage } from 'react-native';

import {
	applyMiddleware,
	createStore,
	compose
} from 'redux'

import logger from 'redux-logger';


import thunkMiddleware from 'redux-thunk';

// import {
// 	persistStore,
// 	autoRehydrate,
// 	createTransform
// } from 'redux-persist';

// import createFilter from 'redux-persist-transform-filter';
//
// import createExpirationTransform from 'redux-persist-transform-expire';

import axiosMiddleware from 'redux-axios-middleware';

import Reducers from '../reducers';

import Actions from 'Actions';

// import { DefaultHomePageState } from '../reducers/homePage';
//
// import { DefaultPatientsState, DefaultDiseases, DefaultSituations } from '../reducers/patients';
//
// import { DefaultDoctorDetailState, DefaultQrCodeState } from '../reducers/doctorDetail';
//
// import { DefaultInquiriesState } from '../reducers/inquiries';
//
// import { DefaultTargets, DefaultTreamentPlans, DefaultTreatmentGuidelines } from '../reducers/medicalTools';

// debugger;
global.reduxStore = createStore(Reducers, compose(applyMiddleware(thunkMiddleware,logger(), axiosMiddleware(global.axiosClient))));

// 30 days
// const ExpireSpan = 30 * 24 * 60 * 60 * 1000;
//
// const ExpireTransform = createExpirationTransform({
// 	'homePage': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultHomePageState
// 	},
// 	'patients': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultPatientsState
// 	},
// 	'doctorDetail': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultDoctorDetailState
// 	},
// 	'qrCdoe': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultQrCodeState
// 	},
// 	'inquiries': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultInquiriesState
// 	},
// 	'diseases': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultDiseases
// 	},
// 	'situations': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultSituations
// 	},
// 	'targets': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultTargets
// 	},
// 	'treamentPlans': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultTreamentPlans
// 	},
// 	'treatmentGuidelines': {
// 		expireSpan: ExpireSpan,
// 		default: DefaultTreatmentGuidelines
// 	}
// });

// const FilteredPatients = createFilter('patients', ['cachedAllPatients', 'expireDate']);
//
// const FilteredInquiries = createFilter('inquiries', ['toDo', 'done', 'expireDate']);
//
// const FilteredHomePage = createFilter('homePage', ['newsTabs']);
//
// const FilteredDoctorDetail = createFilter('doctorDetail', ['name', 'hospital', 'jobTitle', 'office', 'skilled', 'avatar', 'followUpCount', 'interrogationCount', 'profile', 'outPatientSchedules', 'articles']);
//
// const PersistConfig = {
// 	whitelist: ['homePage', 'patients', 'doctorDetail', 'qrCode', 'inquiries', 'diseases', 'situations', 'targets', 'treamentPlans', 'treatmentGuidelines'],
// 	storage: AsyncStorage,
// 	transforms: [
// 		FilteredDoctorDetail,
// 		FilteredHomePage,
// 		FilteredPatients,
// 		FilteredInquiries,
// 		ExpireTransform
// 	]
// };
//
// global.persistor = persistStore(global.reduxStore, PersistConfig, (error, restoredState) => {
// 	if (error) {
// 		console.log('rehydration error:' + error);
// 	} else {
// 		console.log('rehydration complete');
// 		if (global.reduxStore.getState().account.token && global.reduxStore.getState().account.isLogin) {
// 		}
// 	}
// });


export  default  global.reduxStore;