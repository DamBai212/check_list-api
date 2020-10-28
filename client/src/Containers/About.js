import React, { Component } from 'react'
import LinkedinProfile from '../Components/LinkedinProfile.js'
import Contact from '../Components/Contact.js'

class About extends Component {
	state={
        linkedin: false,
        contact: false
    }

    linkedinToggle = () => {
        this.setState({
            linkedin: !this.state.linkedin
        })
    }
    contactToggle = () => {
        this.setState({
            contact: !this.state.contact
        })
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>About</h1>
                    <button onClick={()=>this.linkedinToggle()}> Linkedin</button>
                    <button onClick={()=>this.contactToggle()}> Contact</button>

                    {this.state.linkedin ?<LinkedinProfile /> : null}
                    {this.state.contact ?<Contact /> : null}

                </div>
            </div>
        )
    }
}

export default About;