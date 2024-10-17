export default function Booking({booking,bookable}){
    const{title,date,session,notes}=booking

    return (
        <div className="booking-details-fields">
            <label htmlFor="title">Title</label>
            <p>{title}</p>
            <label htmlFor="bookable">Bookable</label>
            <p>{bookable.title}</p>
            <label htmlFor="bookDate">Booking Date</label>
            <p>{date}</p>
            <label htmlFor="session">Session</label>
            <p>{session}</p>
            {notes &&(<div>
                <label>Notes</label>
                <p>{notes}</p>
            </div>)}
        </div>
    )
}