import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import projectReducer from './projectReducer';
import clockReducer from './clockReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    clock: clockReducer,
    firebase: firebaseReducer
});

export default rootReducer;