import { useQuery } from "react-query";
import getData from "../../utils/api";
import Avatar from "./Avatar";
export default function UserDetails({userID}){
    const {data:user} = useQuery(["user",userID],()=>getData(`http://localhost:3030/users/${userID}`),{suspense:true})
}
return (
    <div className="item user">
        <div className="item-header"><h2>{user.name}</h2></div>
        <Avatar src={`http://localhost:3030/img/${user.img}`} fallbackSrc="http://localhost:3030/img/avatar.gif" alt={user.name}/>
        <div className="user-details"><h3>{user.title}</h3><p>{user.notes}</p></div>
    </div>
)