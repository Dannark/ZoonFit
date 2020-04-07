import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native'
import {notificar} from '../../Menssagem'
import s from './styles'

export default props =>{
    return(
        <View style={s.container_status}>
            <TouchableHighlight onPress={() => passos("4.431 km percorridos")}
             style={s.toucharea} underlayColor='rgba(0,0,0,0.1)'>
                <View style={s.container_status_item}>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Text style={s.bigText}>12k</Text><Text style={s.midText}></Text>
                    </View>
                    <Text style={s.smallText}>Passos</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => passos("7 Copos de água")} style={s.toucharea} underlayColor='rgba(0,0,0,0.1)'>
                <View style={s.container_status_item}>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Text style={s.bigText}>2.1L</Text><Text style={s.midText}></Text>
                    </View>
                    <Text style={s.smallText}>Litros de água</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => passos("200 Calorias Ingeridas")} style={s.toucharea} underlayColor='rgba(0,0,0,0.1)'>
                <View style={s.container_status_item}>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Text style={s.bigText}>200</Text><Text style={s.midText}></Text>
                    </View>
                    <Text style={s.smallText}>Calorias</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

function passos(msg){
    notificar(msg)
}
