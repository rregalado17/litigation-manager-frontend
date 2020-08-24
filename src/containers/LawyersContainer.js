import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import {fetchLawyers} from '../actions/fetchLawyers'
import Lawyers from '../components/Lawyers'
import LawyerInput from '../components/LawyerInput'

class LawyersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchLawyers()
    }

    render() {
        return (
            <div>
            <Route path='/lawyers/new' component={LawyerInput}/>
            <Route exact path='/lawyers' render= {() => <Lawyers lawyers={this.props.lawyers}/>}/>
            </div>
        )
    }
}

const mapStateToProps = state => { //to see data
    return {
        lawyers: state.lawyers
    }
} 

export default connect(mapStateToProps, {fetchLawyers})(LawyersContainer)