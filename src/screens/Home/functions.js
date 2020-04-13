import AsyncStorage from '@react-native-community/async-storage';

export function loadLaunchScreen(props, callback){
    //storeData("firstlaunch","") //reset first screen
    AsyncStorage.getItem("firstlaunch").then((value) => {
        
        if(value !== 'false'){
            callback()
            props.navigation.navigate("LaunchApp")
        }
        else{
            callback()
        }
    });
    
}

async function storeData(key, value){
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log("can't save the store data")
    }
}