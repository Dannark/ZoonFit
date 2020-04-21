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

export function getTotal(val1, val2, gram){
    let unit = parseInt( 
        (""+val1).replace("x","").replace(",","").replace(".","").replace(" ","").replace("-","")
        .trim()
    )
    let kcalUnit = parseInt( 
        (""+val2).replace("x","").replace(",","").replace(".","").replace(" ","").replace("-","")
        .trim()
    )
    let gramUnit = parseInt( 
        (""+gram).replace("x","") .replace(",","") .replace(".","") .replace(" ","") .replace("-","")
        .trim()
    )

    const factor = gramUnit / 100
    const result = parseInt(unit * (kcalUnit * factor))
    
    return [unit, kcalUnit, gramUnit, result]
}