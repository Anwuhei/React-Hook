import { useQueryClient } from "react-query"
import getData from "../../utils/api"
import { useUser } from "./UserContext"
import { Suspense, useState } from "react"
import UsersList from "./UsersList"
import UserDetails from "./UserDetails"
export default function UsersPage(){
    const [loggedInUser] = useUser()
    const [selectedUser,setSelectedUser] = useState(null)
    const user = selectedUser || loggedInUser
    const queryClient = useQueryClient()
    function switchUser(nextUser){
        setSelectedUser(nextUser)
        queryClient.prefetchQuery(["user",nextUser.id],()=>getData(`http://localhost:3030/users/${nextUser.id}`))
        queryClient.prefetchQuery(`http://localhost:3030/img/${nextUser.img}`,()=>new Promise((resolve)=>{
            const img = new Image()
            img.onload =()=>resolve(img)
            img.src = `http://localhost:3001/img/${nextUser.img}`
        }))
    }
    return user? (
        <main className="users-page">
            <UsersList user={user} setUser={switchUser}/>
            <Suspense fallback={<div>loading...</div>}>
                <UserDetails userID={user.id}/>
            </Suspense>
        </main>
    ):null;
}