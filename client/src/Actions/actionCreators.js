import {LOAD_CHECKLISTS, ADD_CHECKLIST, TOGGLE_CHECKLIST, DELETE_CHECKLIST} from '../Actions/actionTypes'

export function loadCheckLists(check_lists) {
    return {type: LOAD_CHECKLISTS, check_lists: check_lists}
}
        
export function addCheckList(id, title) {
    return {type: ADD_CHECKLIST, id: id, title: title}
}

export function toggleCheckList(index) {
    return {type: TOGGLE_CHECKLIST, index: index}
}

export function deleteCheckList(index) {
    return {type: DELETE_CHECKLIST, index: index}
}

