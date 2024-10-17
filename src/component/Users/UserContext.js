import {createContext, useContext, useState} from "react";

const UserContext = createContext();
const UserSetContext = createContext();
export default UserContext;


export function UserProvider ({children}) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <UserSetContext.Provider value={setUser}>
      {children}
      </UserSetContext.Provider>
    </UserContext.Provider>
  );
}
export function useUser(){
    const user = useContext(UserContext)
    const setUser = useContext(UserSetContext)
    if(!setUser){//检查组件上层是否有provider组件，如果没有抛出错误
        throw new Error("The UserProvider is missing")
    }
    return [user,setUser]
}