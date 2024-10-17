export function addDays(date,daysToAdd){
    const clone = new Date(date.getTime())
    clone.setDate(clone.getDate()+daysToAdd)//通过指定天数偏移日期
    return clone
}
export function getWeek(forDate,daysOffset=0){
    const date = addDays(forDate,daysOffset)//立即偏移日期
    const day = date.getDay()//获取新日期的索引，例如星期二的索引为2
    return {date,start:addDays(date,-day),end:addDays(date,6-day)}
}
//返回指定日期ISO字符串的一部分
export function shortISO(date){
    return date.toISOString().split("T")[0]
}
export const isDate = date => !isNaN(Date.parse(date));