import  { createStore, combineReducers, compose, applyMiddleware } from  'redux';
// 注意, 没有加载 'redux' 模块, 这个 以上所有的 模块都不会被加载. 函数 会报错,执行的时候,提示这个函数, 1, 没有加载,2 函数名称错误. .  切记.
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';

import axiosMiddleware from 'redux-axios-middleware';


const finalCreateStore = compose(
    applyMiddleware(logger(), ThunkMiddleware , axiosMiddleware(global.axiosClient)),
)(createStore);

// todo . 这个 rootReducer ,应该放到哪表地方呢??
const reducer = combineReducers(Object.assign({}, rootReducer, {
  // ...rootReducer, //  homeRedux.  combineReducers   这个函数 返回的是一个对象.  查 Dash
})) ;

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store;
}



