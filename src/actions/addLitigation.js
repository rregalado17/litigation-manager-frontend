export const addLitigation = (litigation, lawyerId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/lawyers/${lawyerId}/litigations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(litigation)
        })
        .then(res => res.json())
        .then(lawyer => dispatch({type: 'ADD_LITIGATION', payload: lawyer}))
    }
}