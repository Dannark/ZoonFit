
export function onChangeText(text, options, setOptions, setInputValue){
    setInputValue(text)
    const newList = getSearchList(options, text)
    setOptions(newList)
}

export function pushToArray(obj, selectedOptions, setSelectedOptions, setInputValue, options, setOptions, setModalVisible){
    let newList = [... selectedOptions]
    newList.push(obj)
    console.log(newList)
    setSelectedOptions(newList)

    setInputValue("")
    
    setOptions(options)
    setModalVisible(true);
}

function getSearchList(list, typed){
    return list.filter(item => item.startsWith(typed));
}

export function deleteItem(index, selectedOptions, setSelectedOptions){
    let newList = [...selectedOptions]
    newList.splice(index, 1)
    setSelectedOptions(newList)
}
