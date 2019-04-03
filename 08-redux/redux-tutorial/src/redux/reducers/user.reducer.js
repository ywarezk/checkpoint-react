

const initialState = {
    firstName: 'yariv',
    lastName: 'Katz'
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_FIRST_NAME':
            return {...state, firstName: action.payload};
        default:
            return state;
    }
}