import {combineReducers} from 'redux';
import messageReducer from './message.reducer';
import userReducer from './user.reducer';

// state = {
//     message: {
//         ...
//     },
//     user: {
//         ...
//     }
// }


export default combineReducers({
    message: messageReducer,
    user: userReducer
});