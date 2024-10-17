import React,{useState} from "react";
import ColorPicker from './ColorPicker'
import ColorChoiceText from './ColorChoiceText'
import ColorSample from './ColorSample'
export default function Colors(){
    const availiableColors = ["skyblue","goldenrod","teal","coral"]
    const [color,setColor] = useState(availiableColors[0])
    return (<div>
        <ColorPicker colors = {availiableColors} color={color} setColor={setColor}/>
        <ColorChoiceText color={color}/>
        <ColorSample color={color}/></div>
    )
}