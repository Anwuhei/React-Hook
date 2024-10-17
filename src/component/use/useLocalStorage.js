import { useEffect, useState } from "react"

export default function useLocalStorage(key,initialValue){
    const [value,setValue]=useState(initialValue)
    useEffect(()=>{
        const storeValue = window.localStorage.getItem(key)
        if(storeValue){
            setValue(storeValue)
        }
    },[key])
    useEffect(()=>{
        window.localStorage.setItem(key,value)
    },[key,value])
    return [value,setValue]
}