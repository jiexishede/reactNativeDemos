'use strict'

import { combineReducers } from 'redux';


import { system } from './system';

import profile from './profileReducer';

export default combineReducers({
  system,
  profile
});
