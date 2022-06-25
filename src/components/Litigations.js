import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteLitigation } from '../actions/deleteLitigation'


const litLink = {
    width: '100%',
    height: '100%',
    padding: '1rem',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: '#f7f6f2',
}

const Litigations = (props) => {

    const handleDelete = (litigation) => {
        props.deleteLitigation(litigation.id, litigation.lawyer_id)
    }
    
    return (
        <div><h3>Below is a list of captions where this lawyer has appeared:</h3>
            {props.litigations && props.litigations.map(litigation =>
                <li key={litigation.id}>
                    <Link
                        className='lawyerBtn' 
                        to={`/litigation/${litigation.id}`}
                        exact style={litLink}
                        activeStyle={{background: '#4b616c'}}
                    >
                        {litigation.caption}
                    </Link>
                    {/* <Litigation /> */}
                    
                    {/* <section className='caption'>Caption: {litigation.caption}</section>
                    <section>Court: {litigation.court}</section>
                    <section>Judge: {litigation.judge}</section>
                    <section>Opposing Party: {litigation.opposing_party}</section>
                    <section>Status: {litigation.status}</section><br></br>
                    <button onClick={() => handleDelete(litigation)}>Delete</button></li> */}
                </li>
                )}
        </div>
    )
}

export default connect(null, {deleteLitigation})(Litigations)