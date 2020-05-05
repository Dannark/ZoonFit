const INITIAL_STATE = {
    
    daysWorked:[
        /*{day:"22", month:"Apr", year:"2020", checked:true,
            caloriesFood:[
                { key: "0", foods: [{foodName:"Maça", kcal:52, icon:"apple", count:3, grams:"100"}] }
            ]    
        },*/
    ],
    selectedDayIndex: 0,
}

function daysWorkedReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_OR_REPLACE_DAY':
            let foundIndex = state.daysWorked.findIndex(item => 
                (item.day+""+item.month+""+item.year) == (action.newDay.day+""+action.newDay.month+""+action.newDay.year) )

            let new_DaysWorked = [...state.daysWorked]
            if(foundIndex == -1){
                //add
                new_DaysWorked = [...state.daysWorked, action.newDay]
                foundIndex = state.daysWorked.length
            }
            else{
                //update
                new_DaysWorked[foundIndex] = {...new_DaysWorked[foundIndex], ...action.newDay} 
            }

            return { ...state, selectedDayIndex:foundIndex, daysWorked:[...new_DaysWorked]}
        default:
            return state;
    }
}

export default daysWorkedReducer