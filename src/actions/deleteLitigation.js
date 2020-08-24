export const deleteLitigation = (litigationId, lawyerId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/lawyers/${lawyerId}/litigations/${litigationId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(lawyer => dispatch({type: 'DELETE_LITIGATION', payload: lawyer}))
    }
}