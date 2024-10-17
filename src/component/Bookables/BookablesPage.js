import { lazy } from 'react'
import {Routes,Route} from 'react-router-dom'
const BookableEdit = lazy(()=>import('./BookableEdit'));
const BookableNew = lazy(()=>import('./BookableNew'));
const BookablesView = lazy(()=>import("./BookablesView"));
export default function BookablesPage(){
    return (
        <Routes>
            <Route path='/' element={<BookablesView/>}></Route>
            <Route path='/:id' element={<BookablesView/>}></Route>
            <Route path='/:id/edit' element={<BookableEdit/>}></Route>
            <Route path='/new' element={<BookableNew/>}></Route>
        </Routes>
    )
}