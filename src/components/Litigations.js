import React from 'react'
import { connect } from 'react-redux'
import { deleteLitigation } from '../actions/deleteLitigation'
import { litStyles } from './Styles'

const Litigations = (props) => {

    const handleDelete = (litigation) => {
        props.deleteLitigation(litigation.id, litigation.lawyer_id)
    }
    

    return (
        <div><h3>Your list of matters:</h3>
            {props.litigations && props.litigations.map(litigation =>
                <li key={litigation.id} exact style={litStyles}>
                    <section>Caption: {litigation.caption}</section>
                    <section>Court: {litigation.court}</section>
                    <section>Judge: {litigation.judge}</section>
                    <section>Opposing Party: {litigation.opposing_party}</section>
                    <section>Status: {litigation.status}</section><br></br>
                    <button onClick={() => handleDelete(litigation)}>Delete</button></li>
                )}
        </div>
    )
}

export default connect(null, {deleteLitigation})(Litigations)