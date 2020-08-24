import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import {fetchLawyers} from '../actions/fetchLawyers'
import Lawyers from '../components/Lawyers'
import Lawyer from '../components/Lawyer'
import LawyerInput from '../components/LawyerInput'

class LawyersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchLawyers()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/lawyers/new' component={LawyerInput}/>
                    <Route path='/lawyers/:id' render= {(routerProps) => <Lawyer {...routerProps} lawyers={this.props.lawyers}/>}/>
                    <Route exact path='/lawyers' render= {() => <Lawyers lawyers={this.props.lawyers}/>}/>
                    </Switch>
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