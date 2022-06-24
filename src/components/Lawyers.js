import React from 'react'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const lawyerLink = {
    width: '100%',
    height: '100%',
    padding: '1rem',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: '#f7f6f2',
    // &:hover {
    //     transition: 'all .4s ease-in-out',
    // }

}


// {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: all .4s ease-in-out;
//     filter: grayscale(100%);
//     &:hover{
//         filter: grayscale(0);
//     }

const Lawyers = (props) => {
    return (
        <div>
            <h2>Browse the list of lawyers in our system:</h2>
            <h4>{props.lawyers.map(lawyer => 
                <div key={lawyer.id}>
                    <Link
                        className='lawyerBtn' 
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