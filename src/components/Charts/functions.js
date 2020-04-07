let nodeDistance = 0
export function getNodeDistance(){
    return nodeDistance
}

export const getLinePoints = (data, chartScreen) =>{
    const innerPoints = data? data : [chartScreen.height/2]

    const total = (innerPoints.length-1) == 0? 1 : innerPoints.length-1
    const distanceBetweenNodes = parseInt(chartScreen.width / total)
    nodeDistance = distanceBetweenNodes

    const dataPoints = innerPoints.map((e,i) => {
        return [parseInt(i*distanceBetweenNodes), parseInt(e)]
      })

    return dataPoints
}

export const getRectPoints = (linePoints, chartScreen) =>{
    let dataPointsRect = [[0, chartScreen.height]]
    dataPointsRect = dataPointsRect.concat(linePoints)
    dataPointsRect.push([chartScreen.width, chartScreen.height])
    return dataPointsRect
}

export const getBezierLinePathData = (data, smoothness) =>{
    let finalData = "M";

    finalData += data.map((e,i) =>{
        if(i > 0){
            const lastItem = data[i-1]
            const halfDistance = (e[0] - lastItem[0])*(smoothness * 0.5)
            return [
                    ['C'+(lastItem[0]+halfDistance), lastItem[1]],
                    [e[0]-halfDistance, e[1]], 
                    [e[0], e[1]]
                ].join(' ')
        }
        return [e[0], e[1]]
    }).join(' ')
    
    return finalData;
}
