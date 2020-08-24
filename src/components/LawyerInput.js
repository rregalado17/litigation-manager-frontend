import React from 'react'
import { connect } from 'react-redux'
import { addLawyer } from '../actions/addLawyer'

class LawyerInput extends React.Component {

    state = {first_name: '', last_name: '', retainer: ''} 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addLawyer(this.state)
        this.setState({
            first_name: '', last_name: '', retainer: ''
        })
    }

    render() {
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label>New Lawyer Form<br></br></label>
                    <input type='text' placeholder='First Name' value={this.state.first_name} name="first_name" onChange={this.handleChange}/>
                    <input type='text' placeholder='Last Name' value={this.state.last_name} name="last_name" onChange={this.handleChange}/>
                    <input type='text' placeholder='Retainer' value={this.state.retainer} name="retainer" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addLawyer})(LawyerInput)