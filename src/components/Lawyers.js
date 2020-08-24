import React from 'react'
import Lawyer from './Lawyer'

const Lawyers = (props) => {
    
    return (
        <div>
            {props.lawyers.map(lawyer => 
                <div key={lawyer.id}><Lawyer lawyer={lawyer}/></div>)} 
        </div>
    )
}

export default Lawyers