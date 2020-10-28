import { combineReducers } from 'redux'
import check_listsReducer from './check_listsReducer'

const rootReducer = combineReducers ({
    check_lists:  check_listsReducer
});

export default rootReducer;