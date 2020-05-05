import { useSelector } from 'react-redux'
const moment = require("moment");
//import 'moment/locale/pt-br'

export const getDays = (showNextDays = 5) =>{
    const selectedDay = getSelectedDay()
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
        const date = moment().add( dayOffset, 'days')
        const day = date.format('DD')
        const month = date.format('MMM')
        const year = date.format('YYYY')

        const doesButtonExistAndIsCheckedON = isDateChecked((day+""+month+""+year), daysWorked) 
        const type = doesButtonExistAndIsCheckedON ? "checked" : dayOffset == 0 ? "today" : 
            dayOffset < 0 ? "not-checked":""
        
        const isSelected = selectedDay == (day+""+month+""+year)
        
        return [day, month, year, type, isSelected];
    })
    return myDays
}

const getWorkedDays = () =>{
    return useSelector(state => state.daysWorkedReducer.daysWorked)
}
const getSelectedDay = () =>{

    const selectedDay = useSelector(state => 
        state.daysWorkedReducer.daysWorked[state.daysWorkedReducer.selectedDayIndex] != undefined ?
            state.daysWorkedReducer.daysWorked[state.daysWorkedReducer.selectedDayIndex] : [] )
    return `${selectedDay.day}${selectedDay.month}${selectedDay.year}`
}

const isDateChecked = (date, arrayDate) =>{
    var found = false
    arrayDate.map((item,index) => {
        if(date === (item.day+""+item.month+""+item.year) && item.checked == true){
            found = true
        }
        return item
    })
    return found
}

export const now = [moment().format('DD'), moment().format('MMM'), moment().format('YYYY')]