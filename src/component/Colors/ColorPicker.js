export default function ColorPicker({colors=[],color,setColor}){//使用空数组作为默认值
    return (
        <ul>
            {colors.map(c=>(<li key={c} className={color===c?"selected":null} style={{background:c}} onClick={()=>setColor(c)}>
                {c}
            </li>))}
        </ul>
    )
}