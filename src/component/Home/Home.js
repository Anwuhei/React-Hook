import { useState,useMemo } from "react"
import { getAnagrams,getDistinct } from "./anagrams"    
export default function Home(){
    const [sourceText,setSourceText] = useState("ball")
    const [useDistinct,setUseDistinct]=useState(false)
    const [showAnagrams,setShowAnagrams]=useState(false)
    const anagrams = useMemo(()=>getAnagrams(sourceText),[sourceText])
    const distinct = useMemo(()=>getDistinct(anagrams),[anagrams])
    return(
        <div className="Home">
            {/**chebox react提示报错 */}
            <h1>Angrams</h1>
            <label htmlFor="textPhrase">Enter some text ...</label>
            <input type="text" value={sourceText} onChange={e=>setSourceText(e.target.value.slice(0,10))}/>
            <div className="count">
                {useDistinct?(<p>There are {distinct.length} distinct anagrams.</p>):(<p>There are {anagrams.length} anagrams of "{sourceText}"</p>)}
            </div>
            <p><label htmlFor="checbox"><input type="checkbox" checked={useDistinct} onClick={()=>setUseDistinct()}/>useDistinat</label></p>
            <p><label htmlFor="cbox"><input type="checkbox" checked={showAnagrams} onClick={()=>setShowAnagrams()} /></label></p>
            {showAnagrams&&(<p className="anagrams">{distinct.map(a=>(<span key={a}>{a}</span>))}</p>)}
        </div>
    )
}