import { Fragment, lazy,Suspense } from 'react';
import { QueryClient,QueryClientProvider } from 'react-query';
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'
import ErrorBoundary from './component/UI/ErrorBoundary';
import { UserProvider } from './component/Users/UserContext';
import "./App.css"
import useRandomTitle from './component/use/useRandomTitle'
import useWindowSize from './component/use/useWindowSize'
import {FaHome,FaCalendarAlt,FaDoorOpen,FaUser} from 'react-icons/fa'
const Home = lazy(()=>import('./component/Home/Home'));
const BookablesPage  = lazy(()=>import("./component/Bookables/BookablesPage"));
const BookingsPage = lazy(()=>import("./component/Bookings/BookingsPage"));
const UserPicker = lazy(()=>import("./component/Users/UserPicker"));
const Colors  = lazy(()=>import('./component/Colors/Colors'));
export default function App(){
    const queryclient = new QueryClient()
    const greetings = ["hello","Ciao","Hola","中国"]
    useRandomTitle(greetings)
    const {width,height} = useWindowSize()
    return (
        <QueryClientProvider client={queryclient}>
        <UserProvider>
        <Router>
        <div className='App'>
        <header>
        <NavLink to="/" className="btn btn-header"><FaHome/> app</NavLink>
        <NavLink to="/bookables" className="btn btn-header"><FaCalendarAlt/> Bookables</NavLink>
        <NavLink to="/bookings" className="btn btn-header"><FaDoorOpen/> Bookings</NavLink>
        <NavLink to="/users" className="btn btn-header"><FaUser/> Users</NavLink>
        <NavLink to="/colors" className="btn btn-header"><FaUser/> Colors</NavLink>
        {/* <button onClick={updateGreeting}>Say Hi</button> */}
        <UserPicker/>
        {/* <select value={user} onChange={e=>setUser(e.target.value)}>
            <option>Jason</option>
           <option>Akiko</option>
            <option>Clarisse</option>
            <option>Saner</option>
        </select> */}
        </header>
        <p>width:{width},height:{height}</p>
        {/* <UserContext.Provider value={user}>//将应用程序的UI包装在context provider中 */}
        <ErrorBoundary fallback={<Fragment><p>Try reloading the page</p></Fragment>}>
        <Suspense fallback={<div>Loading....</div>}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bookables/*' element={<BookablesPage/>}/>
                <Route path='/bookings' element={<BookingsPage/>}/>
                <Route path='/users' element={<UserPicker/>}/>
                <Route path='/colors' element={<Colors/>}/>
            </Routes>{/* </UserContext.Provider>  */}
        </Suspense></ErrorBoundary>
        </div>
        </Router>
        </UserProvider></QueryClientProvider>
    )
}