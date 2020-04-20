
export function getTotalKcal(data){
    let kcalTotal = 0
    data.map((obj,i) => {
        obj.foods.map((food, _) => {
            kcalTotal += food.kcal
        })
        
    })
    return kcalTotal
}   

export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
