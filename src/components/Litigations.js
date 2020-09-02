import React from 'react'
import { connect } from 'react-redux'
import { deleteLitigation } from '../actions/deleteLitigation'

const Litigations = (props) => {

    const handleDelete = (litigation) => {
        props.deleteLitigation(litigation.id, litigation.lawyer_id)
    }


    return (
        <div><h3>Your list of matters:</h3>
            {props.litigations && props.litigations.map(litigation =>
                <li key={litigation.id}>
                    Caption: {litigation.caption}
                    <p>Court: {litigation.court}</p>
                    <p>Judge: {litigation.judge}</p>
                    <p>Opposing Party: {litigation.opposing_party}</p>
                    <p>Status: {litigation.status}</p> 
                    <p><button onClick={() => handleDelete(litigation)}>Delete</button></p></li>
                )}
        </div>
    )
}

export default connect(null, {deleteLitigation})(Litigations)