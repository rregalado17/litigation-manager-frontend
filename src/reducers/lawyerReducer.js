export default function lawyerReducer(state = {lawyers: []}, action) {
    
    switch (action.type){
        case 'FETCH_LAWYERS':
            return {lawyers: action.payload}
    
        default:
            return state
    }
}