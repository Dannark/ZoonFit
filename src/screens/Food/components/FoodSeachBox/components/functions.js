export function updateVal(setVal, val, amount, prefix = ""){
    let num = parseInt( 
        (""+val).replace("x","")
        .replace(",","")
        .replace(".","")
        .replace(" ","")
        .replace("-","")
        .trim()
    )

    num += amount
    if(num < 1 || num == NaN){
        num = 1
    }
    setVal(prefix+num)
}

export function getTotal(val1, val2){
    let num1 = parseInt( 
        (""+val1).replace("x","")
        .replace(",","")
        .replace(".","")
        .replace(" ","")
        .replace("-","")
        .trim()
    )
    let num2 = parseInt( 
        (""+val2).replace("x","")
        .replace(",","")
        .replace(".","")
        .replace(" ","")
        .replace("-","")
        .trim()
    )

    return [num1, num2, (num1 * num2)]
}