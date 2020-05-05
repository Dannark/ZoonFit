const INITIAL_STATE = {
    
    user:{
        kg: 0,
        tall: 0,
        age: 0,
        gender: 0,
        activity: 0,
        tmb:0
    }
}

function daysWorkedReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'SET_USER':
            return { ...state, user:action.user}
        
        default:
            return state;
    }
}

export default daysWorkedReducer