import {Link,useParams} from 'react-router-dom'
import BookableDatails from "./BookableDetails";
import BookablesList from "./BookablesList"
import {useQuery} from 'react-query'
import getData from "../../utils/api";
export default function BookablesView(){
    const {data: bookables = [], status, error} = useQuery(
        "bookables",
        () => getData("http://localhost:3030/bookables")
      );
    const {id} = useParams()
    
    const bookable = bookables.find(b=>b.id==parseInt(id,10)) || bookables[0]
    return (
        <main className="bookables-page">
            
            {/* <BookablesList bookable={bookable} setBookable={updateBookable}/> */}
            <BookablesList bookable={bookable} bookables={bookables} getUrl={id=>`/bookables/${id}`} />
            <BookableDatails bookable={bookable}  />
        </main>
    );
}