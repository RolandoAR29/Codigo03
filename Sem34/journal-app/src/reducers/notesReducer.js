// {
//     notes: [],
//     active: null,
//     active: {
//         id: 'Kdasioja46a6a6adq61196asd',
//         title: '',
//         body: '',
//         imageUrl: '',
//         date: 16694252513
//     }
// }

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        
        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }
    
        default:
            return state;
    }
}