import React from 'react'
import {Text, Dimensions} from 'react-native'
import Svg, {Polyline, Defs, LinearGradient, Stop, Mask, Rect, Use} from 'react-native-svg'
import {getBezierLinePathData, getLinePoints, getRectPoints, getNodeDistance} from '../functions'
import s from './styles'

var chartScreen = {
    width: 200,
    height: 200
}


export default props =>{
    chartScreen.width = props.width? props.width : Dimensions.get('window').width;
    chartScreen.height= props.height;

    const smooth = props.smooth ? props.smooth: 0.8

    const linePoints = getLinePoints(props.data, chartScreen)
    const rectPoints = getRectPoints(linePoints, chartScreen)

    const selection = props.selection? props.selection : 0

    const textMidPosX = linePoints[selection][0]
    const textMidPosY = linePoints[selection][1] + 10
    const midText = parseInt(((chartScreen.height-linePoints[selection][1])/chartScreen.height)*100)
        

    const lineColor = props.lineColor ? props.lineColor : '#fff'
    const fillColor = props.fillColor ? props.fillColor : props.lineColor
    const strokeWidth = props.strokeWidth ? props.strokeWidth : 1

    return(
        <>
            <Svg height="100%" width="100%" style={{position: 'absolute'}}>
                <Defs>
                    <LinearGradient
                        id="Gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        y1="100%"
                        x2="0"
                        y2="-800%"
                        >
                        <Stop offset="0" stopColor="white" stopOpacity="0" />
                        <Stop offset="1" stopColor="white" stopOpacity="1" />
                    </LinearGradient>
                    <Mask
                        id="Mask"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        >
                        <Rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient)" />
                    </Mask>

                    <Mask
                        id="selectionMask"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        >
                        <Rect x={textMidPosX-getNodeDistance()/2} y="0" width={getNodeDistance()} 
                            height="100%" fill="url(#Gradient)" />

                    </Mask>

                    <Polyline
                        id="line1"
                        d={getBezierLinePathData(rectPoints, smooth)}
                        />
                    <Polyline
                        id="selection"
                        d={getBezierLinePathData(rectPoints, smooth)}
                        />
                </Defs>

                <Use href="#line1" fill={fillColor} mask="url(#Mask)" />
                <Polyline
                    d={getBezierLinePathData(linePoints, smooth)}
                    stroke={lineColor}
                    strokeWidth={strokeWidth}/>

                {
                     props.selection >= 0?
                     <>
                        <Use href="#selection" fill={fillColor} mask="url(#selectionMask)" />
                        <Use href="#selection" fill={fillColor} mask="url(#selectionMask)" />
                        <Use href="#selection" fill={fillColor} mask="url(#selectionMask)" />
                     </>
                     :null
                }
                

                {
                    props.selection >= 0?
                    <Text style={[s.selectedText, {left: textMidPosX-22, top: textMidPosY}]}>{midText}%</Text>
                    : null
                }
                
            </Svg>
        </>
    )
}