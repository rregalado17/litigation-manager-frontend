export const addLawyer = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/lawyers', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data) 
        })
        .then(res => res.json())
        .then(lawyer => dispatch({type: 'ADD_LAWYER', payload: lawyer}))
    }
}