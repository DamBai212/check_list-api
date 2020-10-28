import React, { Component } from 'react'

class InputBox extends Component {
	
    createCheckList = (e) => {
        if (e.key === 'Enter' && !(this.getTitle.value === '')) {
            this.props.createCheckList(this.getTitle.value)
            this.getTitle.value = '';
        }
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>CheckList</h1>
                </div>
                <div className="inputContainer">
                    <input className="taskInput" type="text" placeholder="Add a task" maxLength="50"
                    onKeyPress={this.createCheckList} ref={(input)=>this.getTitle = input} />
                </div>   
            </div>            
        );
    }
}

export default InputBox