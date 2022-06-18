import React from 'react'
import { connect } from 'react-redux'
import { deleteLitigation } from '../actions/deleteLitigation'

const Litigations = (props) => {

    const handleDelete = (litigation) => {
        props.deleteLitigation(litigation.id, litigation.lawyer_id)
    }

    const litStyles = {
        // width: '50px',
        padding: '3px',
        margin: '0 6px 6px',
        // background: '#3b4754',
        textDecoration: 'none',
        color: '#f7f6f2',
    }
    

    return (
        <div><h3>Your list of matters:</h3>
            {props.litigations && props.litigations.map(litigation =>
                <li key={litigation.id} exact style={litStyles}>
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