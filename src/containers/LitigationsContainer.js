import React from 'react'
import LitigationForm from '../components/LitigationForm'
import Litigations from '../components/Litigations'


class LitigationsContainer extends React.Component {

    render() {
        console.log(1)
        return (
            <div>
                <LitigationForm lawyer={this.props.lawyer}/>
                <Litigations litigations={this.props.lawyer && this.props.lawyer.litigations}/>
            </div>
        )
    }
}



export default LitigationsContainer