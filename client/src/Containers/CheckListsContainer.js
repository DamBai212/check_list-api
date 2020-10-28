import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCheckLists, addCheckList, toggleCheckList, deleteCheckList} from '../Actions/actionCreators'
import InputBox from '../Components/InputBox'
import CheckList from "../Components/CheckList"

class CheckListsContainer extends Component {
  
  getCheckLists() {
   fetch('http://localhost:3001/api/v1/check_lists')
     .then((resp) => resp.json())
     .then(data => this.props.dispatch(loadCheckLists(data)))
    .catch(error => console.log(error))
  }

  createCheckList = (title) => {
    if (!(title === '')) {
      fetch('http://localhost:3001/api/v1/check_lists', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ check_list: {title: title }})})
       .then((resp) => resp.json())
       .then(data => {
         console.log(data)
         this.props.dispatch(addCheckList(data.id, data.title))
         
        })
       .catch(error => console.log(error))
     }
   }

  updateCheckList = (params) => {
    fetch(`http://localhost:3001/api/v1/check_lists/${params.id}`, {
      method: 'PUT', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({check_list: {done: params.checked}})
          })
          .then((resp) => resp.json())
          .then(data => {
            this.props.dispatch(toggleCheckList(params.id))
      })
      .catch(error => console.log(error))      
  }

  deleteCheckList = (id) => {
    fetch(`http://localhost:3001/api/v1/check_lists/${id}`,
    { 
      method: 'DELETE', 
      headers: { 'Content-type': 'application/json'} 
    }
  )
    .then( resp =>  resp.json())
    .then(() => {this.props.dispatch(deleteCheckList(id))})
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getCheckLists()
  }

  render() {
    return (
      <div className="container">
        <InputBox createCheckList={this.createCheckList} />
        <CheckList check_lists= {this.props.check_lists} 
                    updateCheckList={this.updateCheckList} 
                    deleteCheckList={this.deleteCheckList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    check_lists: state.check_lists
  }
}

export default connect(mapStateToProps) (CheckListsContainer)
