import React from 'react'
import {ScrollView, FlatList} from 'react-native'
import {getData} from '../functions'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux'

export default props =>{
    
    const data = useSelector(state => state.caloriesFood)
    
    return(
        <FlatList 
                data={data}
                renderItem={({ item, index }) => 
                    <ButtonList
                        onPress={onclick()} name={item.name} time={item.time} foods={item.foods} />
                }
                keyExtractor={(item, index) => ""+index}
            />
    )
}



function onclick(){
    
}