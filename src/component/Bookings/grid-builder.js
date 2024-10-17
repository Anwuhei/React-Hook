import data from "../../static.json"
import { addDays,shortISO } from "../../utils/date-wrangler"
const {Sessions:sessionNames} = data//将时间段名称赋值给sessionNames
export function test(startDate){
    const bookable = {"id": 1,"group": "Rooms","title": "Meeting Room","notes": "The one with the big table and interactive screen. Seats 12. See Colin if you need the tea and coffee trolley.","sessions": [1,2,3],"days": [0,1,2,3,4,5]}
    const dates = bookable.days.sort().map(d=>shortISO(addDays(startDate,d)))
    const sessions = bookable.sessions.map(i=>sessionNames[i])
    const grid = {}
    sessions.forEach(session => {
        grid[session]={}//为网格的每个时间段分配一个对象
        dates.forEach(date=>grid[session][date]={//为每个日期和每个事件段分配一个预订信息对象
            session,date,bookableId:bookable.id,title:""
        })
    });
    //console.log({grid})
    return {grid,dates,sessions}
    
}
//生成日期UI
export function getGrid(bookable,startDate){//接受当前可预订对象和星期起始日期作为参数
    //if(!bookable) return null
    //bookable初始加载为null，sort方法不可操作
    const dates = bookable.days.sort().map(d=>shortISO(addDays(startDate,d)))
    
    const sessions = bookable.sessions.map(i=>sessionNames[i])

    const grid = {}
    sessions.forEach(session => {
        grid[session]={}//为网格的每个时间段分配一个对象
        dates.forEach(date=>grid[session][date]={//为每个日期和每个事件段分配一个预订信息对象
            session,date,bookableId:bookable.id,title:""
        })
    });
    //console.log(grid)
    return {grid,dates,sessions}//返回网格，日期和时间段数组
}
export function transformBookings(bookingsArray){
    //使用reduce遍历每条预定信息，并构建预定信息的查询对象
    return bookingsArray.reduce((bookings,booking)=>{
        const {session,date} = booking//从当前booking对象中解构session和date
        if(!bookings[session]){
            bookings[session]={}
        }
        bookings[session][date]=booking //将预订信息赋值给时间段和日期
        console.log(bookings)
        return bookings;
    },{})
}