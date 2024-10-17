import { useMemo } from "react";
import { shortISO,isDate } from "../../utils/date-wrangler";
import useFetch from "../../utils/useFetch";
import { getGrid, transformBookings } from "./grid-builder";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import getData from "../../utils/api";
export function useBookings(bookableId,startDate,endDate){
    const start = shortISO(startDate)
    const end = shortISO(endDate)
    const urlRoot = "http://localhost:3030/bookings"
    const queryString = `bookerId=${bookableId}`+`&date_gte=${start}&date_lte=${end}`
    const query = useQuery(["bookings",bookableId,start,end],()=>getData(`${urlRoot}?${queryString}`))
    console.log(query.data)
    return{
        bookings:query.data?transformBookings(query.data):{},
        ...query
    }
}
export function useBookingsParams(){
    const [searchParams,setSearchParams]=useSearchParams()
    const searchDate = searchParams.get("date")
    const bookableId = searchParams.get("bookableId")
    const date = isDate(searchDate) ? new Date(searchDate):new Date()
    const idInt = parseInt(bookableId,10)
    const hasId = !isNaN(idInt)
    function setBookingsDate(date){
        const params = {}
        if(hasId) {params.bookableId = bookableId}
        if(isDate(date)) {params.date = date}
        if(params.date || params.bookableId !== undefined){
            setSearchParams(params,{replace:true})
        }
    }
    return{date,bookableId:hasId?idInt:undefined,setBookingsDate}
}
export function useGrid(bookable,startDate){
    return useMemo(()=>bookable?getGrid(bookable,startDate):{},[bookable,startDate])
}
