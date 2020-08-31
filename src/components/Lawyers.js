import React from 'react'
import { Route, Link } from 'react-router-dom'
import Lawyer from './Lawyer'


const Lawyers = (props) => {
    
    return (
        <div>
            <h3>{props.lawyers.map(lawyer => 
                <div key={lawyer.id}><Link to={`/lawyers/${lawyer.id}`}>{lawyer.first_name}</Link></div>)} </h3>

        </div>
    )
}

export default Lawyers