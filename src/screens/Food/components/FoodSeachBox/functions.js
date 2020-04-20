
export function onChangeText(text, options, setOptions, setInputValue){
    setInputValue(text)
    const newList = getSearchList(options, text)
    setOptions(newList)
}

export function pushToArray(obj, selectedOptions, setSelectedOptions, setInputValue, options, 
    setOptions, setModalVisible){

    if(obj!=undefined){
        let newList = [... selectedOptions]
        newList.push(obj)
        setSelectedOptions(newList)
    }

    setInputValue("")
    
    setOptions(options)
    setModalVisible(false)
}

export function openModal(obj, setSelectedItem, setModalVisible){
    setSelectedItem(obj)
    setModalVisible(true)
}

function getSearchList(list, typed){
    return list.filter(item => item.foodName.toLowerCase().startsWith(typed.toLowerCase()));
}

export function deleteItem(index, selectedOptions, setSelectedOptions){
    let newList = [...selectedOptions]
    newList.splice(index, 1)
    setSelectedOptions(newList)
}
