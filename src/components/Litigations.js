import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteLitigation } from '../actions/deleteLitigation'

const Litigations = (props) => {

    const handleDelete = (litigation) => {
        props.deleteLitigation(litigation.id, litigation.lawyer_id)
    }
    
    return (
        <div><h3>Below is a list of captions where this lawyer has appeared:</h3>
            {props.litigations && props.litigations.map(litigation =>
                <li key={litigation.id}>
                    <Link>
                        {litigation.caption}
                    </Link>
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