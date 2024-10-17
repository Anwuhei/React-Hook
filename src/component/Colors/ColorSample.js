export default function ColorSample({color}){//为prop指定一个默认值 {color="white"}
    return color?(<div style={{background:color}}></div>):null
}