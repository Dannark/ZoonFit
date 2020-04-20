import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        {foodName:"Maça", icon:"apple", kcal:50},
        {foodName:"Biscoito", icon:"cookie", kcal:50},
        {foodName:"Ovo", icon:"egg", kcal:50},
        {foodName:"Banana", icon:"banana", kcal:50},
        {foodName:"Uva", icon:"grapes", kcal:50},
        {foodName:"Arroz", icon:"rice", kcal:250},
        {foodName:"Feijão", icon:"beans", kcal:250},
        {foodName:"Salada", icon:"salad", kcal:50},
        {foodName:"Cenoura", icon:"carrot", kcal:50},
        {foodName:"Refrigerante", icon:"soda", kcal:250},
        {foodName:"Sanduiche da tarde", icon:"sandwich", kcal:250}
    ],
    caloriesFood:[
        { foods: [{foodName:"Banana", kcal:50, icon:"banana", count:3}] }
    ],
}

function foodsReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_FOOD':
            return { ...state, caloriesFood:[...state.caloriesFood, action.food ] }
        default:
            return state;
    }
}

const store = createStore(foodsReducer)

export default store;