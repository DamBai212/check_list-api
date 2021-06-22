import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCheckLists, addCheckList, toggleCheckList, deleteCheckList} from '../Actions/actionCreators'
import InputBox from '../Components/InputBox'
import CheckList from "../Components/CheckList"

class CheckListsContainer extends Component {

  state ={
    sortType: 'asc'
  }
  
  getCheckLists() {
   fetch('http://localhost:3001/api/v1/check_lists')
     .then((resp) => resp.json())
     .then(data => this.props.dispatch(loadCheckLists(data)))
    .catch(error => console.log(error))
  }


  //refactor createCheckList function to be async
  createCheckList = async (title) => {
    let url = 'http://localhost:3001/api/v1/check_lists';

    const config = {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ check_list: {title: title }})};

      const response = await fetch(url, config)

      const data = response.json()
      this.props.dispatch(addCheckList(data.id, data.title))

      
    if (!(title === '')) {
      // fetch('http://localhost:3001/api/v1/check_lists', {
      //   method: 'POST', 
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({ check_list: {title: title }})})
      //  .then((resp) => resp.json())
      //  .then(data => {
      //    this.props.dispatch(addCheckList(data.id, data.title))
         
      //   }) 
      return data
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
          .then(() => {
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

  onSort = (sortType) => {
    this.setState({sortType})
  }
  
  
  render() {
    const check_lists = this.props.check_lists;
    // const sortType = 'asc';
    
    const sorted = check_lists.sort( (a,b) => {
      const isReversed = (this.state.sortType === 'asc') ? 1 : -1
      return isReversed * a.title.localeCompare(b.title)
    });
    return (
      <div className="container">
       <button onClick={()=>this.onSort('asc')}>Sort Todos</button>
       <button onClick={()=>this.onSort('dsc')}>Sort Todos</button>
        <InputBox createCheckList={this.createCheckList} />
        
        <CheckList   check_lists= {this.props.check_lists} 
                    updateCheckList={this.updateCheckList} 
                    deleteCheckList={this.deleteCheckList}
                    sorted={sorted}
                    
                    />
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
