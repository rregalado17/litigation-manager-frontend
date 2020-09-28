export const addLitigation = (litigation, lawyerId) => {
    console.log(6)
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/lawyers/${lawyerId}/litigations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(litigation)
        })
        .then(res => res.json())
        
        .then(lawyer => {
            dispatch({type: 'ADD_LITIGATION', payload: lawyer})
            console.log(7)
        })
        console.log(8)
    }
    console.log(9)
}