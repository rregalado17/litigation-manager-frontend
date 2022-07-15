export default function litigationReducer(state = {litigations: []}, action) {

    switch (action.type){
        case 'FETCH_LITIGATIONS':
            return {litigations: action.payload}
        default:
            return state
    
        }
    }

        
        // case 'ADD_LAWYER':
        //     return {...state, lawyers: [...state.lawyers, action.payload]}
        
        // case 'ADD_LITIGATION':
        //     let addLit = state.lawyers.map(lawyer => {
        //         if (lawyer.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return lawyer
        //         }
        //     })
        //     return {...state, lawyers: addLit}
        
        // case 'DELETE_LITIGATION':
        //     let deleteLit = state.lawyers.map(lawyer => {
        //         if (lawyer.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return lawyer
        //         }
        //     })
        //     return {...state, lawyers: deleteLit}

        // case 'EDIT_LAWYER':
        //     let editLit = state.lawyers.map(lawyer => {
        //         if (lawyer.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return lawyer
        //         }
        //     })
        //     return {...state, lawyers: editLit}
        
