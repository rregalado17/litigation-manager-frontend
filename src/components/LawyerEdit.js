import React from 'react'
import { connect } from 'react-redux'
import { editLawyer } from '../actions/editLawyer'

class LawyerEdit extends React.Component {

    state = {first_name: '', last_name: ''} 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let lawyer = {...this.state, id: this.props.lawyer.id}
        this.props.editLawyer(lawyer)
        this.setState({
            first_name: '', last_name: '', retainer: ''
        })
    }

    render() {
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label><h3>Edit Lawyer Form</h3></label>
                    <input type='text' placeholder='First Name' value={this.state.first_name} name="first_name" onChange={this.handleChange}/>
                    <input type='text' placeholder='Last Name' value={this.state.last_name} name="last_name" onChange={this.handleChange}/>
                    {/* <input type='text' placeholder='Retainer' value={this.state.retainer} name="retainer" onChange={this.handleChange}/> */}
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {editLawyer})(LawyerEdit)