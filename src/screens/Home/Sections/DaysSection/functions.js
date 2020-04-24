import { useSelector } from 'react-redux'
const moment = require("moment");
import 'moment/locale/pt-br'

export const getDays = (showNextDays = 5) =>{
    const daysWorked = getWorkedDays()

    let range = showNextDays
    let diffInDays = 0
    if(daysWorked.length > 0){
        const start = moment(daysWorked[0].day+"/"+daysWorked[0].month+"/"+daysWorked[0].year, "DD/MMM/YYYY")
        const today = moment()
        diffInDays =  Math.floor(( today - start ) / 86400000)

        range += diffInDays
    }

    const myDays = Array(range).fill('').map((item,index) => {
        const dayOffset = (index - diffInDays)
        const date = moment().locale('pt-BR').add( dayOffset, 'days')
        const day = date.format('DD')
        const month = date.format('MMM')
        const year = date.format('YYYY')

        const doesButtonExistAndIsCheckedON = isDateChecked((day+""+month+""+year), daysWorked, true) 
        const type = doesButtonExistAndIsCheckedON ? "checked" : dayOffset == 0 ? "today" : 
            dayOffset < 0 ? "not-checked":""
        return [day, month, year, type];
    })
    return myDays
}

const getWorkedDays = () =>{
    return useSelector(state => state.daysWorked)
}

const isDateChecked = (date, arrayDate, checkedState) =>{
    var found = false
    arrayDate.map((item,index) => {
        if(date === (item.day+""+item.month+""+item.year) && item.checked == true){
            found = true
        }
        return item
    })
    return found
}

export const now = moment().locale('pt-BR')