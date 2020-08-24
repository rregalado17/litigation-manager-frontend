import React from 'react'
import { Redirect } from 'react-router-dom'

const Lawyer = (props) => {

    let lawyer = props.lawyers[props.match.params.id - 1]

    return (
        <h2>
            {/* {lawyer ? null : <Redirect to='/lawyers'/>} */}
            {lawyer ? lawyer.first_name : null} {lawyer ? lawyer.last_name : null} <br></br>
            Budget: {lawyer ? lawyer.retainer : null}
        </h2>
    )
}

export default Lawyer