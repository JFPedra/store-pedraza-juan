import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers/Index'

export default createStore(reducer, applyMiddleware(thunk));