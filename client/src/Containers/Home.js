import React, { Component } from 'react'
import About from '../Components/About.js'
import Contact from '../Components/Contact.js'
import CheckListsContainer from './CheckListsContainer'

class Home extends Component {
	state={
        about: false,
        contact: false,
        checkList: false,
    }

    aboutToggle = () => {
        this.setState({
            about: !this.state.about
        })
    }
    contactToggle = () => {
        this.setState({
            contact: !this.state.contact
        })
    }

    checkListToggle = () => {
        this.setState({
            checkList: !this.state.checkList
        })
    }

    sayHello = () => {
        alert('You clicked me!');
      }
      
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Home</h1>
                    <button onClick={()=>this.checkListToggle()}> Checklist</button>
                    <button onClick={()=>this.aboutToggle()}> About</button>
                    <button onClick={()=>this.contactToggle()}> Contact</button>
                    <button onClick={this.sayHello}>Default</button>

                    {this.state.checkList ?<CheckListsContainer/> : null}
                    {this.state.about ?<About /> : null}
                    {this.state.contact ?<Contact /> : null}
                    

                </div>
            </div>
        )
    }
}

export default Home;