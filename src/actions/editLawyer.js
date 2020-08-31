export const editLawyer = (lawyer) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/lawyers/${lawyer.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(lawyer) 
        })
        .then(res => res.json())
        .then(lawyer => dispatch({type: 'EDIT_LAWYER', payload: lawyer}))
    }
}