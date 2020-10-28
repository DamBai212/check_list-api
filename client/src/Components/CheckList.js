
import React, { Component } from 'react'
import CheckListItem from './CheckListItem'

class CheckList extends Component {
    
    render() {
        const check_lists = this.props.check_lists;
        return(            
            <div className="listWrapper">
                <ul className="taskList">
                {check_lists.map((check_list) => {
                    return (
                        <CheckListItem check_list={check_list} key={check_list.id} id={check_list.id} 
                            updateCheckList={this.props.updateCheckList}
                            deleteCheckList={this.props.deleteCheckList} />
                    )
                })}        
                </ul>
            </div>
        );
    }
}

export default CheckList;