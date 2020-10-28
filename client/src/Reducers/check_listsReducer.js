import {LOAD_CHECKLISTS, ADD_CHECKLIST, TOGGLE_CHECKLIST, DELETE_CHECKLIST} from '../Actions/actionTypes'


function check_listsReducer(state = [], action) 

{

    switch(action.type) {
        case LOAD_CHECKLISTS:
            return action.check_lists;

            case ADD_CHECKLIST:
                return [
                    ...state,
                    {
                        id: action.id,
                        title: action.title,
                        done: false
                    }
                ];

                case TOGGLE_CHECKLIST:
                    return state.map(check_list => (check_list.id === action.index)
                            ? {...check_list,done:!check_list.done}
                            : check_list
                    );

                    case DELETE_CHECKLIST:
                        return state.filter(check_list => check_list.id !== action.index);

        default:
           return state;
    }
}

export default check_listsReducer