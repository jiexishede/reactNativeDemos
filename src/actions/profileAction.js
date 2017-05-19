import { PROFILE_GET_TODOORDERLIST, PROFILE_GET_DONEORDERLIST  } from './actionTypes';
import {SERVER_URL} from '../config/server';

/**
 * 订单列表
 * @param patientId
 * @param status
 * @returns {{type, payload: (Promise.<TResult>|Promise.<U>|*)}}
 * @constructor
 */

const ListSize = '10';

export const getOrderList = (patientId, status) => {
  if(status === 2){
    return {
      type: PROFILE_GET_TODOORDERLIST,
      count: ListSize,
      payload: {
        request: {
          url: '/patientInfo/getOrderList',
          method: 'post',
          data: {
            page: 0,
            pagecount: ListSize,
            status: 2,
            patientId: patientId
          }
        }
      }
    }
  } else if(status === 3){
    return {
      type: PROFILE_GET_TODOORDERLIST,
      count: ListSize,
      payload: {
        request: {
          url: '/patientInfo/getOrderList',
          method: 'post',
          data: {
            page: 0,
            pagecount: ListSize,
            status: 2,
            patientId: patientId
          }
        }
      }
    }
  }
};          

