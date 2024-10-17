import { Fragment, useEffect,useMemo, useState } from "react"
import { useBookings,useGrid } from "./bookingsHooks"

export default function BookingsGrid({week,bookable,booking,setBooking}){
    const {bookings,status,error} = useBookings(bookable?.id,week.start,week.end)
    const {grid,sessions,dates} = useGrid(bookable,week.start)
    useEffect(()=>{
        setBooking(null)
    },[bookable,week.start,setBooking])
   // console.log(week.end)
    function cell(session,date){
        const cellData = bookings?.[session]?.[date]||grid[session][date]
        const isSelected = booking?.session === session && booking?.date === date
        return (
            <td key={date} className={isSelected?"selected":null} onClick={bookings?()=>setBooking(cellData):null}>
                {cellData.title}
            </td>
        )
    }
    if(!grid){
        return <p>Loading...</p>
    }
    return(
        <Fragment>
            <div className="bookings-grid placeholder" style={{display:"none"}}>
            <h3>Bookings Grid</h3>
            <p>{bookable?.title}</p>
            <p>{week.date.toISOString()}</p>
            </div>
            {error&&(<p className="bookingsError">
                {`There was a problem loading the bookings data(${error})`}
            </p>)}
            <p>{dates}</p>
            <table className={status==="success"?"bookingsGrid active":"bookingsGrid"}>
                <thead>
                    <tr>
                        <th><span className="status">Spinner</span></th>
                        {dates.map(d=>(<th key={d}>
                            {(new Date(d)).toDateString()}
                        </th>))}
                    </tr>
                </thead>
                <tbody>
                    {sessions.map(session=>(<tr key={session}><th>{session}</th>
                    {dates.map(date=>cell(session,date))}
                    </tr>))}
               
                </tbody>
            </table>
        </Fragment>
        
    )
}