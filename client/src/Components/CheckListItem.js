import React, { Component } from 'react'

class CheckListItem extends Component {


    updateCheckList = (e, id) => {
        this.props.updateCheckList({id: id, checked: e.target.checked})
    }

    deleteCheckList = (id) => {
        this.props.deleteCheckList(id)
    }    

    render() {
        const check_list = this.props.check_list;
        return(
            <li className="task" key={check_list.id} id={check_list.id}>
                <input className="taskCheckbox" type="checkbox" 
                checked={check_list.done} onChange={(e) => this.updateCheckList(e, check_list.id)} />              
                <label className="taskLabel">{check_list.title}</label>
                <span className="deleteTaskBtn" onClick={(e) => this.deleteCheckList(check_list.id)}>
                x
                </span>
            </li>
        );
    }
}

export default CheckListItem;