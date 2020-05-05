
export function getTotalKcal(data){
    let kcalTotal = 0
    data.map((obj,i) => {
        obj.foods.map((food, _) => {
            const factor = food.grams / 100
            kcalTotal += parseInt(food.count * (food.kcal * factor))
        })
        
    })
    return kcalTotal
}   

export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
