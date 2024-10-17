import { useState,useEffect, Fragment, useContext } from "react"
import useLocalStorage from "../use/useLocalStorage"
import {useUser} from "./UserContext"
//import data from '../../data.json'
//import Spinner from "../UI/Spinner"
export default function UserPicker(){
//const {users} = data;
    //const [user,setUser] = useLocalStorage("user","")
    const [user,setUser] = useUser()
    const [users,setUsers] = useState(null)
    useEffect(()=>{
         function  getUsers(){
         fetch("http://localhost:3030/users").then(resp=>resp.json()).then(data=>{
            setUsers(data)
            setUser(data[0])
         })
        }
        getUsers()
    },[setUser])

    function handleSelect(e){
        const selectedID=parseInt(e.target.value,10)
        const selectedUser = users.find((u)=>{return u.id == selectedID})
        setUser(selectedUser)
        //console.log(selectedUser)
    }
    if(users===null) return "<Spinner/>"
    return (
        <Fragment>
        <p>{typeof users}</p>
        <select className="user-picker" onChange={handleSelect} value={users?.id}>
            {users.map(u=>{return <option key={u.id} value={u.id}>{u.name}</option>})} 
            {/*使用map方法的时候：如果使用{}必须有return生成jsx map(()=>{return})。使用（）时候：map（（）=>()）*/}
            {/* {users.map(u=>{
                <option key={u.id}>{u.name}</option>
            })} */}
        </select>
        </Fragment>
    )
}