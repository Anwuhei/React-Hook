import { Suspense } from "react"
import { useQuery } from "react-query"
function Img({src,alt,...props}){
    const {data:imgObject} = useQuery(src,()=>new Promise((resolve)=>{
        const img = new Image()
        img.onload = ()=> reslove(img)
        img.src=src
    }),{suspense:true})
    return <img src={imgObject.src} alt={alt} {...props}/>
}
export default function Avatar({src,alt,fallbackSrc,...props}){
    return(
        <div className="user-avatar">
            <Suspense fallback={<img src={fallbackSrc} alt="Fallback Avatar"/>}>
            <Img src={src} alt={alt} {...props}/>
            </Suspense>
        </div>
    )
}