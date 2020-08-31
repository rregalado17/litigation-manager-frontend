import React from 'react'
import { connect } from 'react-redux'
import {fetchLitigation} from '../actions/fetchLitigation'
import LitigationForm from '../components/LitigationForm'
import Litigations from '../components/Litigations'
import Litigation from '../components/Litigation'

class LitigationsContainer extends React.Component {

    render() {
        return (
            <div>
                <LitigationForm lawyer={this.props.lawyer}/>
                <Litigations litigations={this.props.lawyer && this.props.lawyer.litigations}/>
            
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {
        litigation: state.litigation
    }
} 

export default connect(mapStateToProps, {fetchLitigation})(LitigationsContainer)