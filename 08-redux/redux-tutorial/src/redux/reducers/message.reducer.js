import { SET_MESSAGE, SET_DELAYED_MESSAGE } from "../actions";




const initialState = {
    message: 'hello from redux',
    otherMessage: 'will only be read by child1',
    arrayOfMessages: [
        {title: 'asdf', description: 'asdfasd'}
    ]
}

export default function messageReducer(state = initialState, action) {
    switch(action.type) {
        case SET_MESSAGE:
            // 1. clone the state to newState
            // 2. newState['message'] = action.payload
            return {...state, message: action.payload};
        case SET_DELAYED_MESSAGE:
            return {...state, otherMessage: action.payload}
        // case 'ADD_TO_ARRAY':
        //     const newState = {...state};
        //     const myAddArray = newState.arrayOfMessages;

        default:
            return state;
    }
}