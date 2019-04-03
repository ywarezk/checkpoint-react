
export const SET_MESSAGE = '[messageReducer] SET MESSAGE';
export const SET_DELAYED_MESSAGE = '[messageReducer] SET DELAYED MESSAGE';

export function setMessage(message) {
    return {type: SET_MESSAGE, payload: message};
}

// set otherMessage after delay of 1 sec
export function setDelayedMessage(message) {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({type: SET_DELAYED_MESSAGE, payload: message});
        }, 2000);
    }
}