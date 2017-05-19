import {PROFILE_GET_TODOORDERLIST,PROFILE_GET_DONEORDERLIST} from '../actions/actionTypes';

const initialState = {
  todoOrderList:[],
  doneOrderList:[],
  hasToDoFetched: false,
  hasDoneFetched: false,
}

function handleError(state, response, newState) {
  console.log(response);
  if (newState) {
    return Object.assign({}, state, newState);
  }
  else {
    return state;
  }
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PROFILE_GET_TODOORDERLIST:
      return { ...state,hasToDoFetched:false};
    case PROFILE_GET_TODOORDERLIST +'_SUCCESS':
      return { ...state, todoOrderList:action.payload.json.data,hasToDoFetched:true};
    case PROFILE_GET_TODOORDERLIST + '_FAIL':
      return handleError(state, { hasToDoFetched: true });
    case PROFILE_GET_DONEORDERLIST:
      return { ...state,hasDoneFetched:false};
    case PROFILE_GET_DONEORDERLIST +'_SUCCESS':
      return { ...state, doneOrderList:action.payload.json.data,hasDoneFetched:true};
    case PROFILE_GET_DONEORDERLIST + '_FAIL':
      return handleError(state, { hasDoneFetched: true });
    default:
      return state;
  }
};
