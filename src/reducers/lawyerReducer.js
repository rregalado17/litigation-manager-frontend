export default function lawyerReducer(state = {lawyers: []}, action) {
    
    switch (action.type){
        case 'FETCH_LAWYERS':
            return {lawyers: action.payload}
        
        case 'ADD_LAWYER':
            return {...state, lawyers: [...state.lawyers, action.payload]}
        
            default:
            return state
    }
}