export function getData(){
    const data = [
        {
            name: "Café da manha",
            time: "07:00",
            foods: [{foodName:"Maça", kcal:50, icon:"apple"},
                {foodName:"Biscoito", kcal:50, icon:"cookie"},
                {foodName:"Ovo", kcal:50, icon:"egg", count: 2},]
        },
        { foods: [{foodName:"Banana", kcal:50, icon:"banana", count:3}] },
        { foods: [{foodName:"Uva", kcal:50, icon:"grapes"}] },
        {
            name: "Almoço",
            time: "12:00",
            foods: [{foodName:"Arroz", kcal:250, icon:"rice"},
                {foodName:"Feijão", kcal:250, icon:"beans"},
                {foodName:"Salada", kcal:50, icon:"salad"},
                {foodName:"Cenoura", kcal:50, icon:"carrot"}]
        },
        {
            time: "12:20",
            foods: [{foodName:"Refrigerante", kcal:250, icon:"soda", count:2}]
        },
        {
            time: "16:30",
            foods: [{foodName:"Sanduiche da tarde", kcal:250, icon:"sandwich"}]
        },
        {
            time: "19:00",
            foods: [{foodName:"Batata Frita", kcal:250, icon:"frenchfries", count:12}]
        },
        
    ]
    return data
}

export function getTotalKcal(){
    let kcalTotal = 0
    getData().map((obj,i) => {
        obj.foods.map((food, _) => {
            kcalTotal += food.kcal
        })
        
    })
    return kcalTotal
}   

export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
