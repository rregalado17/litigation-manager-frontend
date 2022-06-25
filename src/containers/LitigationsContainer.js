import React from 'react'
// import LitigationForm from '../components/LitigationForm'
// import Litigations from '../components/Litigations'
import {
    BrowserRouter as Router,
    Route, Switch
  } from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchLitigations} from '../actions/fetchLitigations'
import Lawyers from '../components/Lawyers'
import Litigation from '../components/Litigation'
import Litigations from '../components/Litigations'

class LitigationsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchLitigations() 
    }

    render() {
        // return (
        //     <div>
        //         {/* <LitigationForm lawyer={this.props.lawyer}/> */}

        //     </div>
        // )
        return ( 
            <div>
                <Switch>
                    {/* <Route path='/lawyers/new' component={LawyerInput}/> */}
                    <Route path='/litigations/:id' render= {(routerProps) => <Litigation {...routerProps} litigations={this.props.litigations}/>}/>
                    <Route exact path='/litigations' render= {() => <Litigations litigations={this.props.litigations}/>}/>
                    <Route exact path='litigations/lawyers' render={() => <Lawyers lawyers={this.props.litigations.lawyers}/>}/>
                </Switch>
                {/* <Litigations litigations={this.props.lawyer && this.props.lawyer.litigations}/> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        litigations: state.litigations
    }
} 

export default connect(mapStateToProps, {fetchLitigations})(LitigationsContainer)
