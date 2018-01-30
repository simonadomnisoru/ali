import actionTypes from './actionTypes';

// Define a reducer
const reducer = (state, action) => {
    if (action.type === actionTypes.LOGIN) {
        return { pageToDisplay: actionTypes.LOGIN }
    }
    if (action.type === actionTypes.VIDEOS) {
        return { pageToDisplay: actionTypes.VIDEOS }
    }
    return state
}

export default reducer;