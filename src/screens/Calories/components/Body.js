import React from 'react'
import {ScrollView} from 'react-native'
import {getData} from '../functions'
import ButtonList from '../../../components/Buttons/Components/ButtonList'

export default function body(props){
    
    const data = getData()
    
    return(
        <ScrollView>
            {
                data.map((obj, i) => {
                    return (
                        <ButtonList key={i} 
                            onPress={onclick()} name={obj.name} time={obj.time} foods={obj.foods} />
                    )
                })
            }
        </ScrollView>
    )
}



function onclick(){
    
}