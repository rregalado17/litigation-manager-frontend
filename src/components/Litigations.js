import React from 'react'

const Litigations = (props) => {

    return (
        <div>
            {props.litigations && props.litigations.map(litigation =>
                <li key={litigation.id}>{litigation.caption} - {litigation.costs}</li>
                )}
        </div>
    )
}

export default Litigations 