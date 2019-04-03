import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducer from './reducers/index.js';
import messageReducer from './reducers/message.reducer';
import userReducer from './reducers/user.reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//           App

// Child1            Child2

// {message: 'hello from redux'}

// redux state is immutable
// the state is wrapped with redux store

const combineAllReducersToOne = combineReducers({
    message: messageReducer,
    user: userReducer
})

// applyMiddleware is enhancer
// enhancer gives store more powers
// stronger dispatch
// 
export default createStore(combineAllReducersToOne, composeWithDevTools(
    applyMiddleware(
        thunk
    )
)
);

// create child1 child2
// wrap them with context
// read the redux state


