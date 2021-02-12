import { combineReducers } from 'redux';


const appReducer = combineReducers({
    /* your app’s top-level reducers */
})
const rootReducer = (state, action) => {
    if (action.type === '') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer;