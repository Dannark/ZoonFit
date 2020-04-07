import React from 'react'
import {View, Text} from 'react-native'
import s from './styles'

const week = {
    name_pt: ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    name_en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

export default props =>{

    const daySelected = props.daySelected ? props.daySelected : null

    return(
        <View style={s.container}>
            {
                week.name_pt.map((e,i) =>{
                    var styles = s.week_text
                    if(i == daySelected-1){
                        styles = s.week_text_selected
                    }
                    return <Text style={styles} key={i}  >{e.slice(0,3)}</Text>
                })
            }
            
        </View>
    )
}
