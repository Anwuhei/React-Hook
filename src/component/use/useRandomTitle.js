import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
const getRandomIndex = length => Math.floor(Math.random()*length)
export default function useRandomTitle(titles=["hello"]){
    const [index,setIndex] = useState(()=>getRandomIndex(titles.length))//随机索引
    useDocumentTitle(titles[index])
    return ()=> setIndex(getRandomIndex(titles.length))//返回一个函数，以便使用该hook的代码能更新标题
}