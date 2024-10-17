import { useContext } from 'react'
import Booking from './Booking'
import { useUser } from '../Users/UserContext'
export default function BookingDetails({booking,bookable}){
    const [user] = useUser()
    
    const isBooker = booking && user && (booking?.bookableId == user?.id)
    
    return (
        <div className="booking-details placeholder">
            <h3>Booking Details{isBooker &&(<span className='controls'><button>Edit</button></span>)}</h3>
            {booking?(<Booking booking={booking} bookable={bookable}/>):
            (<div className='booking-details-fields'>Select a booking or a booking slot.</div>)}
        </div>
    )
}