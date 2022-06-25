import React from 'react'
import LitigationsContainer from '../containers/LitigationsContainer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteLitigation } from '../actions/deleteLitigation'



export const Litigation = (props) => {

    // const handleDelete = (litigation) => {
    //     props.deleteLitigation(litigation.id, litigation.lawyer_id)
    // }

  return (
    <div>
        Hello
    </div>
  )
}

export default Litigation

// let lawyer = props.lawyers[props.match.params.id - 1]
//     //let lawyer = props.lawyers.filter(lawyer => lawyer.id == props.match.params.id)[0]

//     return (
//         <div> 
//             <h2>
//                 {lawyer ? lawyer.first_name : null} {lawyer ? lawyer.last_name : null} <br></br>
//             </h2>
//             {/* <LawyerEdit lawyer={lawyer} /><br></br> */}
//             <LitigationsContainer lawyer={lawyer}/>
            
//         </div>  