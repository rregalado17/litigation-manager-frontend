import React from 'react'
import { Route, Link } from 'react-router-dom'
import Lawyer from './Lawyer'

const Lawyers = (props) => {
    
    return (
        <div>
            {props.lawyers.map(lawyer => 
                <div key={lawyer.id}><Link to={`/lawyers/${lawyer.id}`}>{lawyer.first_name}</Link></div>)} 
        </div>
    )
}

export default Lawyers