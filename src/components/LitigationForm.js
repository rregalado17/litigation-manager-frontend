import React from 'react'
import { connect } from 'react-redux'
import { addLitigation } from '../actions/addLitigation'

class LitigationForm extends React.Component {

    state = {
        status: 'Active',
        caption: '',
        court: '',
        judge: '',
        opposing_party: '',
        costs: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addLitigation(this.state, this.props.lawyer.id)
        this.setState({
            status: 'Active',
            caption: '',
            court: '',
            judge: '',
            opposing_party: '',
            // costs: '',
            lawyer: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label><h4>New Litigation Form: </h4></label>
                        <select 
                            name='status' 
                            value={this.state.status} 
                            onChange={this.handleChange}>
                            <option>Active</option>
                            <option>Concluded</option>
                        </select><br></br>
                        <input 
                            type='text' 
                            placeholder='Caption' 
                            value={this.state.caption} 
                            name="caption" 
                            onChange={this.handleChange}
                        /><br></br>
                        <input 
                            type='text' 
                            placeholder='Court' 
                            value={this.state.court} 
                            name="court" 
                            onChange={this.handleChange}
                        /><br></br>
                        <input 
                            type='text' 
                            placeholder='Judge' 
                            value={this.state.judge} 
                            name="judge" 
                            onChange={this.handleChange}
                        /><br></br>
                        <input 
                            type='text' 
                            placeholder='Opposing Party' 
                            value={this.state.opposing_party} 
                            name="opposing_party" 
                            onChange={this.handleChange}
                        /><br></br>
                        {/* <input type='text' placeholder='Costs' value={this.state.costs} name="costs" onChange={this.handleChange}/><br></br> */}
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addLitigation})(LitigationForm)