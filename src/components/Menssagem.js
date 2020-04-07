import { Alert, ToastAndroid, Platform } from "react-native";

export const notificar = msg =>{
    if(Platform.OS === 'android'){ //ios
        ToastAndroid.show(msg, ToastAndroid.LONG)
    }else{
        Alert.alert('Informação', msg)
    }
}