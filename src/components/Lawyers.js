import React from 'react'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const lawyerLink = {
    width: '50px',
    // padding: '3px',
    margin: '0 6px 6px',
    // background: '#3b4754',
    textDecoration: 'none',
    color: '#f7f6f2',
}

const Lawyers = (props) => {
    return (
        <div>
            <h3>Browse the list of lawyers in our system:</h3>
            <h4>{props.lawyers.map(lawyer => 
                <div key={lawyer.id}>
                    <Link 
                        to={`/lawyers/${lawyer.id}`}
                        exact style={lawyerLink}
                        activeStyle={{background: '#4b616c'}}
                    >
                        {lawyer.first_name} {lawyer.last_name}
                    </Link>
                    {/* <LikeButton/> */}
                </div>)}
            </h4>

        </div>
    )
}

export default Lawyers