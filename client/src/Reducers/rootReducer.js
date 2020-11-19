import { combineReducers } from 'redux'
import CheckListsReducer from './CheckListsReducer'

const rootReducer = combineReducers ({
    check_lists:  CheckListsReducer
});

export default rootReducer;