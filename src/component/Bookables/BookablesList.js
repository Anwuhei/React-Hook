import useFetch from "../../utils/useFetch"
import { Link, useNavigate } from "react-router-dom"
export default function BookablesList({bookable,setBookable,getUrl}){
//bookables显示所有状态，bookable改变状态
    const{data:bookables=[],status,error} = useFetch("http://localhost:3030/bookables")
    const group = bookable?.group //使用可选链运算符（?.）从选定的可预订信息中获取当前的分组，这是js最近新增的一项特性
    const bookablesInGroup = bookables.filter(b=>b.group === group)
    const groups =[...new Set(bookables.map(b=>b.group))]
    const navigate = useNavigate()

    console.log(getUrl())
    function changeGroup(event){
        const bookablesInSelectedGroup = bookables.filter(b=>b.group === event.target.value)
        navigate(getUrl(bookablesInSelectedGroup[0].id))
    }
    
    function nextBookable(){
        const i = bookablesInGroup.indexOf(bookable)
        const nextIndex = (i+1) % bookablesInGroup.length
        const nextBookable = bookablesInGroup[nextIndex]
        navigate(getUrl(nextBookable.id))
    }
    if(status==="error"){
        return <p>{error.message}</p>
    }
    if(status=="loading"){
        return <p>Loading bookables......</p>
    }
    return (
        <div>
            <select value={group} onChange={changeGroup}>
                {groups.map(g=><option value={g} key={g}>{g}</option>)}
            </select>
            <ul className="bookables items-list-nav">
                {bookablesInGroup.map((b,i)=><li key={b.id} className={b.id===bookable.id?"selected":null}>
                        <Link to={getUrl(b.id)} className="btn" replace={true}>{b.title}</Link>
                    </li>)}
            </ul>
            <p><button className="btn" onClick={nextBookable}  autoFocus>Next</button></p>
        </div>
    )
}