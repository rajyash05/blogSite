import { createStore , applyMiddleware  } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

export  const initState = {blogList: [],};

export const dataStore = createStore(reducer, initState, applyMiddleware(thunk));

