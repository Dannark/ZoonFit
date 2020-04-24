import React, { useEffect} from 'react'
import {View, FlatList} from 'react-native'
import Buttons from '../../../../components/Buttons'
import { getDays, getSelectedDay, now } from './functions'
import { useSelector, useDispatch } from 'react-redux'

import s from './styles'

let flatListRef = null

export default porps =>{
    const dispatch = useDispatch()
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
        const newDay = {
            day:`${item[0]}`, 
            month:`${item[1]}`, 
            year:`${item[2]}`,
        }
        dispatch({type: 'ADD_OR_REPLACE_DAY', newDay})
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

