import React, { useEffect} from 'react'
import {View, FlatList} from 'react-native'
import Buttons from '../../../../components/Buttons'
import { getDays, now } from './functions'
import { useSelector, useDispatch } from 'react-redux'

import s from './styles'

let flatListRef = null
let fistLaunch = false

export default porps =>{
    const dispatch = useDispatch()

    if(fistLaunch == false){
        fistLaunch = true
        selectDay([now[0], now[1], now[2]])
    }

    const showNextDays = 7
    const days = getDays(showNextDays)

    useEffect(() => {
        setTimeout(() =>{
            let target = (days.length - showNextDays - 2) 
            if(target <0) target = 0

            scrollToIndex(target)
        }, 200)
    })

    function selectDay(item){
        if(item != undefined){
            const newDay = {
                day:`${item[0]}`, 
                month:`${item[1]}`, 
                year:`${item[2]}`,
            }
            dispatch({type: 'ADD_OR_REPLACE_DAY', newDay})
        }
    }

    return(
        <View style={s.dates}>
            <FlatList 
                ref={(ref) => { flatListRef = ref; }}
                onScrollToIndexFailed={()=>{}}
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                data={days}
                keyExtractor={(item, i) => ""+i}
                renderItem={({ item }) => <Buttons day={item} onPress={() => selectDay(item)} />}
                >
                
            </FlatList>
        </View>
    )
}

const scrollToIndex = (index) => {
    if(flatListRef != null){
        flatListRef.scrollToIndex({animated: true, index: index});
    }
}

