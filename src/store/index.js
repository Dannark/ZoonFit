import { createStore } from 'redux'

const INITIAL_STATE = {
    //TABELA DE CALORIAS BASEADO EM 100g
    data: [ 
        {foodName:"Maça", icon:"apple", kcal:52, unit:"unit", grams:"100"},
        {foodName:"Bacon", icon:"bacon", kcal:541, unit:"unit", grams:"100"},
        {foodName:"Banana", icon:"banana", kcal:122, unit:"unit", grams:"100"},
        {foodName:"Feijão", icon:"beans", kcal:75, unit:"unit", grams:"100"},
        {foodName:"Pão Francês", icon:"bread", kcal:310, unit:"unit", grams:"50"},
        {foodName:"Brocolis", icon:"broccoli", kcal:22, unit:"portion", grams:"100"},
        {foodName:"Cenoura", icon:"carrot", kcal:45, unit:"unit", grams:"100"},
        {foodName:"Ovo Cozido", icon:"egg", kcal:155, unit:"unit", grams:"70"},
        {foodName:"Batata Frita", icon:"frenchfries", kcal:312, unit:"unit", grams:"100"},
        {foodName:"Biscoito", icon:"cookie", kcal:500, unit:"portion", grams:"100"},
        {foodName:"Uva", icon:"grapes", kcal:67, unit:"portion", grams:"100"},
        {foodName:"Limão", icon:"lemon", kcal:29, unit:"unit", grams:"58"},
        {foodName:"Abacaxi", icon:"pineapple", kcal:50, unit:"unit", grams:"100"},
        {foodName:"Arroz", icon:"rice", kcal:130, unit:"unit", grams:"100"},
        {foodName:"Salada Verde", icon:"salad", kcal:17, unit:"unit", grams:"100"},
        {foodName:"Sanduiche", icon:"sandwich", kcal:233, unit:"unit", grams:"100"},
        {foodName:"Refrigerante", icon:"soda", kcal:41, unit:"unit", grams:"100"},
        {foodName:"Morango", icon:"strawberry", kcal:33, unit:"unit", grams:"100"},
        {foodName:"Melancia", icon:"watermelon", kcal:30, unit:"unit", grams:"100"},
        {foodName:"Carne", icon:"meat", kcal:143, unit:"unit", grams:"100"},
        {foodName:"Cachorro Quente", icon:"hotdog", kcal:290, unit:"unit", grams:"100"},
        {foodName:"linguiça calabresa", icon:"sausage", kcal:300, unit:"unit", grams:"100"},
        {foodName:"linguiça de frango", icon:"sausage", kcal:166, unit:"unit", grams:"100"},
        {foodName:"linguiça de peru defumada", icon:"sausage", kcal:148, unit:"unit", grams:"100"},
        {foodName:"linguiça toscana", icon:"sausage", kcal:255, unit:"unit", grams:"100"},
        {foodName:"Frango", icon:"chicken", kcal:239, unit:"unit", grams:"100"},
        {foodName:"Peixe Grelhado", icon:"fish", kcal:109, unit:"unit", grams:"100"},
        {foodName:"Pepperoni", icon:"pepperoni", kcal:494, unit:"unit", grams:"100"},
        {foodName:"Pizza", icon:"pizza", kcal:266, unit:"unit", grams:"100"},
        {foodName:"Chocolate", icon:"chocolate", kcal:546, unit:"unit", grams:"100"},
        {foodName:"Pipoca", icon:"popcorn", kcal:375, unit:"unit", grams:"100"},
        {foodName:"Café", icon:"coffee", kcal:1, unit:"unit", grams:"100"},
        {foodName:"Café Expresso", icon:"coffee", kcal:9, unit:"unit", grams:"100"},
        {foodName:"Macarrão", icon:"pasta", kcal:371, unit:"unit", grams:"100"},
        {foodName:"Yoghurt", icon:"yoghurt", kcal:59, unit:"unit", grams:"100"},
        {foodName:"Sorvete", icon:"icecream", kcal:207, unit:"unit", grams:"100"},
        {foodName:"Picolé", icon:"popsicle", kcal:79, unit:"unit", grams:"100"},
        {foodName:"Milkshake", icon:"milkshake", kcal:112, unit:"unit", grams:"100"},
        {foodName:"Queijo", icon:"cheese", kcal:299, unit:"unit", grams:"100"},
        {foodName:"Presunto", icon:"ham", kcal:145, unit:"unit", grams:"100"},
        {foodName:"Chá", icon:"tea", kcal:1, unit:"unit", grams:"100"},
        {foodName:"Tomate", icon:"tomato", kcal:19, unit:"unit", grams:"100"},
        {foodName:"Suco de laranja", icon:"orangejuice", kcal:45, unit:"orangejuice", grams:"100"},
        
    ],
    daysWorked:[
        {day:"22", month:"Apr", year:"2020", checked:true,
            caloriesFood:[
                { key: "0", foods: [{foodName:"Maça", kcal:52, icon:"apple", count:3, grams:"100"}] }
            ]    
        },
    ],
    selectedDayIndex: 0,
}

function foodsReducer(state = INITIAL_STATE, action){
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
        /*case 'ADD_FOOD':
            return { ...state, caloriesFood:[...state.caloriesFood, action.food ] }
        case 'REMOVE_FOOD':
            let newList = [...state.caloriesFood]
            let prevIndex = newList.findIndex(item => item.key === action.key)
            
            newList.splice(prevIndex, 1)
            return { ...state, caloriesFood:[...newList] }*/
        default:
            return state;
    }
}

const store = createStore(foodsReducer)

export default store;