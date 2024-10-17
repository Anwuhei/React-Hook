import BooksablesList from '../Bookables/BookablesList'
import Bookings from './Bookings'
import { useBookingsParams } from './bookingsHooks'
import useFetch from '../../utils/useFetch'
import { shortISO } from '../../utils/date-wrangler'
export default function BookingsPage(){
    const {data:bookables =[],status,error} = useFetch("http://localhost:3030/bookables")
    const {date,bookableId} = useBookingsParams()
    const bookable = bookables.find(b=>b.id===bookableId) || bookables[0]
    function getUrl(id){
        const root = `/bookings?bookableId=${id}`
        return date ? `${root}&date=${shortISO(date)}`:root
    }
    return (
        <main className="bookings-page">
            <BooksablesList bookable={bookable} bookables={bookables} getUrl={getUrl}/>
            <Bookings bookable={bookable}/>
        </main>
    )
}