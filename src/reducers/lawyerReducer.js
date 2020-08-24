export default function lawyerReducer(state = {lawyers: []}, action) {
    debugger;
    switch (action.type){
        case 'FETCH_LAWYERS':
            return {lawyers: action.payload}
        
        case 'ADD_LAWYER':
            return {...state, lawyers: [...state.lawyers, action.payload]}
        
        case 'ADD_LITIGATION':
            // let lawyers = state.lawyers.map(lawyer => {
            //     if (lawyer.id === action.payload.id) {
            //         return action.payload
            //     } else {
            //         return lawyer
            //     }
            // })
            // return {...state, lawyers: lawyers}
            return {}
        
        default:
            return state

    }
}