import React from 'react'
import LitigationsContainer from '../containers/LitigationsContainer'
import LawyerEdit from './LawyerEdit'

const Lawyer = (props) => {

    let lawyer = props.lawyers[props.match.params.id - 1]
    //let lawyer = props.lawyers.filter(lawyer => lawyer.id == props.match.params.id)[0]

    return (
        <div> 
            <h2>
                {lawyer ? lawyer.first_name : null} {lawyer ? lawyer.last_name : null} <br></br>
            </h2>
            {/* <LawyerEdit lawyer={lawyer} /><br></br> */}
            <LitigationsContainer lawyer={lawyer}/>
        </div>  
    )
}

export default Lawyer