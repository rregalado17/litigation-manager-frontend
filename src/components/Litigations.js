import React from 'react'
import { connect } from 'react-redux'
import { deleteLitigation } from '../actions/deleteLitigation'

const Litigations = (props) => {

    const handleDelete = (litigation) => {
        props.deleteLitigation(litigation.id, litigation.lawyer_id)
    }

    return (
        <div>
            {props.litigations && props.litigations.map(litigation =>
                <li key={litigation.id}>{litigation.caption} - {litigation.costs} <button onClick={() => handleDelete(litigation)}>Delete</button></li>
                )}
        </div>
    )
}

export default connect(null, {deleteLitigation})(Litigations)