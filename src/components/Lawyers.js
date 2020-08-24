import React from 'react'

const Lawyers = (props) => {
    
    return (
        <div>
            {props.lawyers.map(lawyer => <li key={lawyer.id}>{lawyer.first_name} - {lawyer.last_name}</li>)} 
        </div>
    )
}

export default Lawyers