import React from 'react'
import {
    BrowserRouter as Router,
    Route, Switch
  } from 'react-router-dom';
import { connect } from 'react-redux'
//import { Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import {fetchLawyers} from '../actions/fetchLawyers'
import Lawyers from '../components/Lawyers'
import Lawyer from '../components/Lawyer'
import LawyerInput from '../components/LawyerInput'
import Litigation from '../components/Litigation'
import Home from '../components/Home'
import Litigations from '../components/Litigations'


class LawyersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchLawyers()
    }

    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/lawyers/new' component={LawyerInput}/>
                    <Route path='/lawyers/:id' render= {(routerProps) => <Lawyer {...routerProps} lawyers={this.props.lawyers}/>}/>
                    <Route exact path='/lawyers' render= {() => <Lawyers lawyers={this.props.lawyers}/>}/>
                    <Route exact path='/lawyers/litigations' render={() => <Litigations litigations={this.props.litigations}/>}/>
                    {/* <Route path='/lawyers/new' component={LawyerInput}/> */}
                    <Route path='/lawyers/litigation/:id' render= {(routerProps) => <Litigation {...routerProps} litigations={this.props.litigations}/>}/>
                    {/* <Route exact path='/lawyers' render= {() => <Lawyers lawyers={this.props.lawyers}/>}/> */}
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