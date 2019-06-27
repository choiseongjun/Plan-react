
import projectReducer from './projectReducer';
import {combineReducers} from 'redux'
import authReducer from './authReducer';
import {firestoreReducer} from 'redux-firestore'

const rootReducers=combineReducers({
    auth:authReducer,
    project:projectReducer,
    firestore: firestoreReducer
})

export default rootReducers