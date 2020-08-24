import React from 'react'

const Lawyer = (props) => {

    return (
        <div>
            {props.lawyer.last_name}, {props.lawyer.first_name} - {props.lawyer.retainer}
        </div>
    )
}

export default Lawyer