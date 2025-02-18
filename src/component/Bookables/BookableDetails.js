import { useState } from 'react'
import staic from '../../static.json'
const {days,Sessions} = staic
export default function BookableDatails({bookable}){
    const [hasDetails,setHasDetails] = useState(true)
    function toggleDetails(){
        setHasDetails(has=>!has)
    }
    return bookable &&(<div className='bookable-details'>
        <div className='item'>
            <div className='item-header'><h2>{bookable.title}</h2>
            <span className='controls'><label>
                <input type='checkbox' checked={hasDetails} onChange={toggleDetails} />Show details
            </label></span>
            </div>
            <p>{bookable.notes}</p>
            {hasDetails &&(<div className='item-details'>
                <h3>Availability</h3>
                <div className='bookable-availability'>
                    {/* <ul>{bookable.days.sort().map(d=><li key={d}>{days[d]}</li>)}</ul>
                    <ul>{bookable.sessions.map(s=><li key={s}>{sessions[s]}</li>)}</ul> */}
                    <ul>{bookable.days.sort().map(d=><li key={d}>{days[d]}</li>)}</ul>
                    <ul>{bookable.sessions.map(s=><li key={s}>{Sessions[s]}</li>)}</ul> 

                </div>
            </div>)}
        </div>
    </div>)
}