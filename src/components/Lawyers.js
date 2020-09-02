import React from 'react'
import { Link } from 'react-router-dom'

const Lawyers = (props) => {

    return (
        <div>
            <h3>Browse the list of lawyers in our system:</h3>
            <h4>{props.lawyers.map(lawyer => 
                <div key={lawyer.id}><Link to={`/lawyers/${lawyer.id}`}>{lawyer.first_name} {lawyer.last_name}</Link></div>)} </h4>

        </div>
    )
}

export default Lawyers