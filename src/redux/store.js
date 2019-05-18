import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
//get all reducers
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store