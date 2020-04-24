import React from 'react'
import {View, Text, FlatList, StyleSheet, Dimensions, Animated} from 'react-native'
import {getData} from '../functions'
import ButtonList from './ButtonList'
import { useSelector, useDispatch } from 'react-redux'
import { SwipeListView } from 'react-native-swipe-list-view';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Config from '../../../Config'

const rowTranslateAnimatedValues = {};


export default props =>{
    
    const data = useSelector(state => 
        state.daysWorked[state.selectedDayIndex] != undefined &&
            state.daysWorked[state.selectedDayIndex].caloriesFood != undefined?
                state.daysWorked[state.selectedDayIndex].caloriesFood : [] )
    const dispatch = useDispatch()
    
    Array(data.length)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
    });
    
    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        
        if (value == Dimensions.get('window').width ) {
            const prevIndex = data.findIndex(item => item.key === key);
            Animated.timing(rowTranslateAnimatedValues[prevIndex], {
                toValue: 0,
                duration: 200,
            }).start(() => {
                dispatch({type: 'REMOVE_FOOD', key})
            });
            
            
        }
    };
    
    return(
        <SwipeListView 
            useFlatList={true}
            
            data={data}
            renderItem={({item, index}) => 
                <Animated.View
                    useNativeDriver={false}
                    style={[
                        {
                            height: rowTranslateAnimatedValues[
                                index
                            ].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 68],//the height of the component
                            }),
                        },
                    ]}
                    >
                    <ButtonList
                        onPress={onclick()} name={item.name} time={item.time} foods={item.foods} />
                </Animated.View>
            }
            keyExtractor={(item, index) => item.key}
            disableLeftSwipe
            leftOpenValue={Dimensions.get('window').width}
            onSwipeValueChange={onSwipeValueChange}
            renderHiddenItem={ (item, index) => (
                <View style={s.rowBack}>
                    <EvilIcons name="trash" size={30} color={Config.primaryColor.color}  />
                    <Text style={{color:'white'}}>Deletado!</Text>
                </View>
            )}
            //leftOpenValue={75}
            //rightOpenValue={-75}
        />
    )
}

function onclick(){
    
}


const s = StyleSheet.create({
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
})