
import React, { Component } from 'react'
import CheckListItem from './CheckListItem'

class CheckList extends Component {

    // onSort = (sortType) => {
    //     this.props.sortType(sortType)
    // }
    
    render() {
        // const check_lists = this.props.check_lists;
        const sorted = this.props.sorted;
        return(            
            <div className="listWrapper">
                
                <ul className="taskList">
                {sorted.map((check_list) => {
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