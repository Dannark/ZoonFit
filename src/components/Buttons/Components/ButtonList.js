import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


export default props => {

    const foods = props.foods ? props.foods : [{foodName:"Comida", kcal:250, icon:"food", count:1}]
    const name = props.name ? props.name : foods[0].foodName
    const time = props.time ? props.time : "08:00"
    let totalKcal = 0

    return(
        <TouchableOpacity onPress={props.onPress} >
            <View style={s.container}>
                
                <View style={s.itemsContainer}>
                    {
                        foods.map((obj, i) => {
                            totalKcal += obj.kcal
                            return (
                                <FoodIcon key={i} icon={obj.icon} count={obj.count} />
                            )
                        })
                    }
                </View>

                <View style={s.textContainer}>
                    <Text style={s.textTitle}>{name}</Text>
                    <View style={s.line} />
                    <Text style={s.textSubtitle}>+{totalKcal} kcal</Text>
                </View>
                <Text style={s.textSubtitle}>{time}</Text>
            </View>
        </TouchableOpacity>
    )
}

const FoodIcon = (props) =>{
    const count = props.count? props.count: 1

    const path = '../../../img/icons/'
    let iconSource = props.icon == "food" ? require(path+"food.png") : null
    iconSource = props.icon == "apple" ? require(path+"apple.png") : iconSource
    iconSource = props.icon == "bacon" ? require(path+"bacon.png") : iconSource
    iconSource = props.icon == "banana" ? require(path+"banana.png") : iconSource
    iconSource = props.icon == "beans" ? require(path+"beans.png") : iconSource
    iconSource = props.icon == "bread" ? require(path+"bread.png") : iconSource
    iconSource = props.icon == "broccoli" ? require(path+"broccoli.png") : iconSource
    iconSource = props.icon == "carrot" ? require(path+"carrot.png") : iconSource
    iconSource = props.icon == "egg" ? require(path+"egg.png") : iconSource
    iconSource = props.icon == "fastfood" ? require(path+"fastfood.png") : iconSource
    iconSource = props.icon == "frenchfries" ? require(path+"frenchfries.png") : iconSource
    iconSource = props.icon == "cookie" ? require(path+"cookie.png") : iconSource
    iconSource = props.icon == "fruits" ? require(path+"fruits.png") : iconSource
    iconSource = props.icon == "grapes" ? require(path+"grapes.png") : iconSource
    iconSource = props.icon == "lemon" ? require(path+"lemon.png") : iconSource
    iconSource = props.icon == "lunch" ? require(path+"lunch.png") : iconSource
    iconSource = props.icon == "pineapple" ? require(path+"pineapple.png") : iconSource
    iconSource = props.icon == "rice" ? require(path+"rice.png") : iconSource
    iconSource = props.icon == "salad" ? require(path+"salad.png") : iconSource
    iconSource = props.icon == "sandwich" ? require(path+"sandwich.png") : iconSource
    iconSource = props.icon == "soda" ? require(path+"soda.png") : iconSource
    iconSource = props.icon == "strawberry" ? require(path+"strawberry.png") : iconSource
    iconSource = props.icon == "watermelon" ? require(path+"watermelon.png") : iconSource
    iconSource = props.icon == "meat" ? require(path+"meat.png") : iconSource
    iconSource = props.icon == "hotdog" ? require(path+"hotdog.png") : iconSource
    iconSource = props.icon == "sausage" ? require(path+"sausage.png") : iconSource
    iconSource = props.icon == "chicken" ? require(path+"chicken.png") : iconSource
    iconSource = props.icon == "fish" ? require(path+"fish.png") : iconSource
    iconSource = props.icon == "pepperoni" ? require(path+"pepperoni.png") : iconSource
    iconSource = props.icon == "pizza" ? require(path+"pizza.png") : iconSource
    iconSource = props.icon == "chocolate" ? require(path+"chocolate.png") : iconSource
    iconSource = props.icon == "popcorn" ? require(path+"popcorn.png") : iconSource
    iconSource = props.icon == "coffee" ? require(path+"coffee.png") : iconSource
    iconSource = props.icon == "pasta" ? require(path+"pasta.png") : iconSource
    iconSource = props.icon == "yoghurt" ? require(path+"yoghurt.png") : iconSource
    iconSource = props.icon == "icecream" ? require(path+"icecream.png") : iconSource
    iconSource = props.icon == "popsicle" ? require(path+"popsicle.png") : iconSource
    iconSource = props.icon == "milkshake" ? require(path+"milkshake.png") : iconSource
    iconSource = props.icon == "cheese" ? require(path+"cheese.png") : iconSource
    iconSource = props.icon == "ham" ? require(path+"ham.png") : iconSource
    iconSource = props.icon == "tea" ? require(path+"tea.png") : iconSource
    iconSource = props.icon == "tomato" ? require(path+"tomato.png") : iconSource

    return(
        <View style={s.circle}>
            <Image source={iconSource} style={s.iconCircle} />
            <Text style={s.amomunt}>x{count}</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 15,
        marginVertical: 4
    },
    itemsContainer:{
        flexDirection: "row",
        maxWidth: 200,
        flexWrap: 'wrap'
    },
    circle:{
        flex: 0,
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0,0,0, 0.15)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    amomunt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        position: 'absolute',
        bottom: 0
    },
    iconCircle:{
        width:"60%", height:"60%"
    },
    
    textContainer:{
        flex: 1,
        paddingHorizontal: 10
    },
    textTitle:{
        color: 'white',
        fontSize: 18,
    },
    line:{
        height:1,
        backgroundColor: 'rgba(255,255,255, 0.1)',
    },
    textSubtitle:{
        color: 'gray',
        fontSize: 13
    }
})